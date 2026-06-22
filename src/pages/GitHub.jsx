import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, CircleDot, FolderGit2, ExternalLink, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import Navbar from '../components/leah/Navbar';

const API = 'https://api.github.com';

export default function GitHub() {
  const [overview, setOverview] = useState(null);
  const [activity, setActivity] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activityLoading, setActivityLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOverview = async () => {
    try {
      const res = await base44.functions.invoke('githubActivity', {});
      if (res.data?.error) throw new Error(res.data.error);
      setOverview(res.data);
    } catch (e) {
      setError(e.message || 'Failed to load GitHub data');
    } finally {
      setLoading(false);
    }
  };

  const fetchActivity = async (owner, repo) => {
    setActivityLoading(true);
    setActivity(null);
    try {
      const res = await base44.functions.invoke('githubActivity', { owner, repo });
      if (res.data?.error) throw new Error(res.data.error);
      setActivity(res.data);
    } catch (e) {
      setError(e.message || 'Failed to load activity');
    } finally {
      setActivityLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  const handleSelectRepo = (repo) => {
    setSelectedRepo(repo);
    setActivity(null);
    setError(null);
    fetchActivity(repo.owner, repo.name);
  };

  const formatDate = (d) => {
    const date = new Date(d);
    const now = new Date();
    const diff = (now - date) / 1000;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--canvas)', minHeight: '100vh' }}>
        <Navbar />
        <div className="flex items-center justify-center" style={{ minHeight: '60vh' }}>
          <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--cream-dark)', borderTopColor: 'var(--teal)' }} />
        </div>
      </div>
    );
  }

  if (error && !overview) {
    return (
      <div style={{ backgroundColor: 'var(--canvas)', minHeight: '100vh' }}>
        <Navbar />
        <div className="max-w-4xl mx-auto px-5 md:px-10 py-20">
          <p className="section-label mb-4" style={{ color: 'var(--teal)' }}>GitHub</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--ink)' }}>Unable to load repository activity</h2>
          <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.6 }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--canvas)', minHeight: '100vh' }}>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
              <span className="section-label">Project Workspace</span>
            </div>
            <h1 className="hero-display" style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Repository <em style={{ color: 'var(--teal)' }}>activity.</em>
            </h1>
            {overview?.user && (
              <div className="flex items-center gap-3 mt-6">
                <img src={overview.user.avatar} alt="" className="w-8 h-8 rounded-full grayscale" />
                <span className="text-sm" style={{ color: 'var(--ink)', opacity: 0.7 }}>{overview.user.name || overview.user.login}</span>
                <a href={overview.user.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs" style={{ color: 'var(--teal)' }}>
                  View profile <ExternalLink size={11} />
                </a>
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Repo List */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <FolderGit2 size={16} style={{ color: 'var(--teal)' }} />
                <span className="section-label" style={{ color: 'var(--teal)' }}>Repositories</span>
              </div>
              <div className="space-y-0">
                {overview?.repos?.map((repo, i) => (
                  <motion.button
                    key={repo.fullName}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={() => handleSelectRepo(repo)}
                    className="w-full text-left py-5 border-t group cursor-pointer transition-all duration-200"
                    style={{
                      borderColor: selectedRepo?.fullName === repo.fullName ? 'var(--teal)' : 'rgba(18,18,18,0.12)',
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-base md:text-lg truncate transition-colors duration-200" style={{ color: 'var(--ink)' }}>
                          {repo.name}
                        </h4>
                        {repo.description && (
                          <p className="text-xs mt-1 truncate" style={{ color: 'var(--ink)', opacity: 0.5 }}>{repo.description}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          {repo.language && (
                            <span className="text-xs" style={{ color: 'var(--teal)', opacity: 0.8 }}>{repo.language}</span>
                          )}
                          {repo.openIssues > 0 && (
                            <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.4 }}>{repo.openIssues} issues</span>
                          )}
                          <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.4 }}>· {formatDate(repo.updatedAt)}</span>
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: selectedRepo?.fullName === repo.fullName ? 'var(--teal)' : 'var(--ink)', opacity: 0.4 }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Activity Panel */}
            <div className="lg:col-span-8">
              {!selectedRepo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full py-20 text-center"
                >
                  <FolderGit2 size={32} style={{ color: 'var(--teal)', opacity: 0.3 }} />
                  <p className="mt-4 text-sm" style={{ color: 'var(--ink)', opacity: 0.5 }}>
                    Select a repository to view its activity
                  </p>
                </motion.div>
              )}

              {selectedRepo && (
                <div>
                  <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b" style={{ borderColor: 'rgba(18,18,18,0.12)' }}>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl" style={{ color: 'var(--ink)' }}>{selectedRepo.name}</h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--ink)', opacity: 0.5 }}>{selectedRepo.fullName}</p>
                    </div>
                    <a href={selectedRepo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs transition-opacity hover:opacity-60" style={{ color: 'var(--teal)' }}>
                      Open <ExternalLink size={12} />
                    </a>
                  </div>

                  {activityLoading && (
                    <div className="flex items-center gap-3 py-10">
                      <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--cream-dark)', borderTopColor: 'var(--teal)' }} />
                      <span className="text-sm" style={{ color: 'var(--ink)', opacity: 0.5 }}>Loading activity…</span>
                    </div>
                  )}

                  {activity && !activityLoading && (
                    <div className="space-y-10">
                      {/* Commits */}
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <GitCommit size={16} style={{ color: 'var(--teal)' }} />
                          <span className="section-label" style={{ color: 'var(--teal)' }}>Recent Commits</span>
                          <span className="text-xs ml-auto" style={{ color: 'var(--ink)', opacity: 0.4 }}>{activity.commits.length}</span>
                        </div>
                        <div className="space-y-0">
                          {activity.commits.map((commit) => (
                            <div key={commit.sha} className="py-4 border-t" style={{ borderColor: 'rgba(18,18,18,0.08)' }}>
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1 font-mono text-xs" style={{ color: 'var(--teal)', opacity: 0.6 }}>
                                  {commit.sha.substring(0, 7)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm truncate" style={{ color: 'var(--ink)' }}>{commit.message.split('\n')[0]}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.5 }}>{commit.author}</span>
                                    <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.3 }}>· {formatDate(commit.date)}</span>
                                  </div>
                                </div>
                                <a href={commit.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-xs transition-opacity hover:opacity-60" style={{ color: 'var(--teal)', opacity: 0.6 }}>
                                  <ExternalLink size={12} />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pull Requests */}
                      {activity.pullRequests.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-5">
                            <GitPullRequest size={16} style={{ color: 'var(--teal)' }} />
                            <span className="section-label" style={{ color: 'var(--teal)' }}>Open Pull Requests</span>
                            <span className="text-xs ml-auto" style={{ color: 'var(--ink)', opacity: 0.4 }}>{activity.pullRequests.length}</span>
                          </div>
                          <div className="space-y-0">
                            {activity.pullRequests.map((pr) => (
                              <div key={pr.number} className="py-4 border-t" style={{ borderColor: 'rgba(18,18,18,0.08)' }}>
                                <div className="flex items-start gap-3">
                                  <span className="text-xs flex-shrink-0 mt-1" style={{ color: 'var(--teal)', opacity: 0.6 }}>#{pr.number}</span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm truncate" style={{ color: 'var(--ink)' }}>{pr.title}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.5 }}>{pr.author}</span>
                                      {pr.draft && <span className="text-xs px-1.5 py-0.5" style={{ color: 'var(--ink)', opacity: 0.4, border: '0.5px solid rgba(18,18,18,0.2)' }}>Draft</span>}
                                      <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.3 }}>· {formatDate(pr.updated)}</span>
                                    </div>
                                  </div>
                                  <a href={pr.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-xs transition-opacity hover:opacity-60" style={{ color: 'var(--teal)', opacity: 0.6 }}>
                                    <ExternalLink size={12} />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Issues */}
                      {activity.issues.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-5">
                            <CircleDot size={16} style={{ color: 'var(--teal)' }} />
                            <span className="section-label" style={{ color: 'var(--teal)' }}>Open Issues</span>
                            <span className="text-xs ml-auto" style={{ color: 'var(--ink)', opacity: 0.4 }}>{activity.issues.length}</span>
                          </div>
                          <div className="space-y-0">
                            {activity.issues.map((issue) => (
                              <div key={issue.number} className="py-4 border-t" style={{ borderColor: 'rgba(18,18,18,0.08)' }}>
                                <div className="flex items-start gap-3">
                                  <span className="text-xs flex-shrink-0 mt-1" style={{ color: 'var(--teal)', opacity: 0.6 }}>#{issue.number}</span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm truncate" style={{ color: 'var(--ink)' }}>{issue.title}</p>
                                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                                      <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.5 }}>{issue.author}</span>
                                      {issue.labels.map((label) => (
                                        <span key={label} className="text-xs px-1.5 py-0.5" style={{ color: 'var(--teal)', border: '0.5px solid var(--teal)', opacity: 0.7 }}>{label}</span>
                                      ))}
                                      <span className="text-xs" style={{ color: 'var(--ink)', opacity: 0.3 }}>· {formatDate(issue.updated)}</span>
                                    </div>
                                  </div>
                                  <a href={issue.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-xs transition-opacity hover:opacity-60" style={{ color: 'var(--teal)', opacity: 0.6 }}>
                                    <ExternalLink size={12} />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activity.commits.length === 0 && activity.pullRequests.length === 0 && activity.issues.length === 0 && (
                        <p className="text-sm py-10" style={{ color: 'var(--ink)', opacity: 0.5 }}>No recent activity in this repository.</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}