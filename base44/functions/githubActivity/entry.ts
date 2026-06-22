import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('github');

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const rawBody = await req.text().catch(() => '');
    let body = {};
    try { body = rawBody ? JSON.parse(rawBody) : {}; } catch (_) { body = {}; }
    const owner = body.owner;
    const repo = body.repo;

    // If a specific repo is requested, fetch its activity
    if (owner && repo) {
      const [commitsRes, prsRes, issuesRes] = await Promise.all([
        fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=15`, { headers }),
        fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=10&sort=updated&direction=desc`, { headers }),
        fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=10&sort=updated&direction=desc`, { headers }),
      ]);

      const commits = await commitsRes.json();
      const pullRequests = await prsRes.json();
      const issues = (await issuesRes.json()).filter((i) => !i.pull_request);

      return Response.json({
        owner,
        repo,
        commits: commits.map((c) => ({
          sha: c.sha,
          message: c.commit.message,
          author: c.commit.author.name,
          date: c.commit.author.date,
          url: c.html_url,
        })),
        pullRequests: pullRequests.map((p) => ({
          number: p.number,
          title: p.title,
          author: p.user.login,
          updated: p.updated_at,
          url: p.html_url,
          draft: p.draft,
        })),
        issues: issues.map((i) => ({
          number: i.number,
          title: i.title,
          author: i.user.login,
          updated: i.updated_at,
          url: i.html_url,
          labels: i.labels.map((l) => l.name),
        })),
      });
    }

    // Otherwise, list the authenticated user's repos sorted by recent activity
    const reposRes = await fetch('https://api.github.com/user/repos?sort=updated&per_page=10&direction=desc', { headers });
    const repos = await reposRes.json();

    const userRes = await fetch('https://api.github.com/user', { headers });
    const ghUser = await userRes.json();

    return Response.json({
      user: {
        login: ghUser.login,
        name: ghUser.name,
        avatar: ghUser.avatar_url,
        url: ghUser.html_url,
      },
      repos: repos.map((r) => ({
        name: r.name,
        fullName: r.full_name,
        owner: r.owner.login,
        description: r.description,
        private: r.private,
        updatedAt: r.updated_at,
        url: r.html_url,
        stars: r.stargazers_count,
        language: r.language,
        openIssues: r.open_issues_count,
      })),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});