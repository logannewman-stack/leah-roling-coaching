import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const programs = [
  {
    number: '01',
    name: 'The Read.',
    tagline: 'For operators ready for an honest diagnostic',
    duration: '1 to 2 days',
    format: 'written read-out delivered within 7 days',
    body: "A focused, one-to-two day intensive. I come into the practice, virtually or in person, and read the operator and the operation together. Numbers, team, leadership patterns, the operator's relationship to their own time and life.",
    outcome: "You walk away with a structured written read of where you are, what is in the way, and the specific next moves that matter most. Many clients begin here. Some never need more than this.",
    ideal: 'Operators ready for honest clarity',
  },
  {
    number: '02',
    name: 'The Year.',
    tagline: 'The flagship — for owners growing the practice and themselves',
    duration: '3, 6, or 12 months',
    format: 'weekly or biweekly · Academy access included',
    body: "Three months. Six months. Or a full year. The Year is the canonical engagement. Weekly or biweekly 1:1 coaching with the operator. Strategic, operational, leadership, and personal work. All of it on the table, all of it in the same room.",
    outcome: "Includes access to the InnerBoard Academy framework library and standing access between sessions for the decisions that cannot wait. This is the work where most of the real change happens.",
    ideal: 'Practice owners ready for full-scope transformation',
    featured: true,
  },
  {
    number: '03',
    name: 'The Cabinet.',
    tagline: 'For established operators who need counsel, not a curriculum',
    duration: 'Quarterly half or full days',
    format: 'in-person or virtual · standing access between sessions',
    body: "For practice owners and founders already past the weekly coaching stage. Multi-location operators, post-acquisition leaders, founders managing complexity at scale. You do not need a coach. You need a high-trust outside voice in the room when the stakes are high.",
    outcome: "Hires, partnerships, exits, expansion, comp restructures, board prep. The cabinet meets four times a year. I hold one of the chairs.",
    ideal: 'Multi-location and post-acquisition operators',
  },
  {
    number: '04',
    name: 'The Install.',
    tagline: 'For operators ready to make self-leadership architectural',
    duration: '6 months',
    format: '1:1 coaching + team workshops + OS deployment · scoped per organization',
    body: "The six-month engagement where the leadership work goes into the organization. Leadership coaching for the operator alongside the deployment of InnerBoard OS. The operating system that turns self-leadership from one person's habit into the team's culture.",
    outcome: "Combines 1:1 coaching, leadership-team workshops, and full OS implementation across the practice. This is how the work scales beyond the founder.",
    ideal: 'Organizations scaling self-leadership culture',
  },
];

export default function Programs() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section
      id="programs"
      ref={ref}
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-20"
        >
          <div className="lg:col-span-5">
            <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
              The Programs
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl"
              style={{ color: 'var(--ink)', lineHeight: 1.1 }}
            >
              Four ways to{' '}
              <em style={{ color: 'var(--teal)' }}>work together.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p
              className="body-narrative"
              style={{ color: 'var(--ink)', opacity: 0.7 }}
            >
              A diagnostic. A year. A standing seat in your cabinet. An organization-wide install.
              Each one is designed for a different stage of the operator's journey. Begin where you are.
            </p>
          </div>
        </motion.div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: 'rgba(18,18,18,0.10)' }}
        >
          {programs.map((prog, i) => (
            <motion.div
              key={prog.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              className="program-card flex flex-col p-7 md:p-14 relative group"
              style={{
                backgroundColor: prog.featured ? 'rgba(69,99,109,0.04)' : 'var(--canvas)',
              }}
            >
              {prog.featured && (
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ backgroundColor: 'var(--teal)' }}
                />
              )}

              <div className="flex items-start justify-between mb-5 md:mb-8">
                <span
                  className="font-serif text-5xl leading-none"
                  style={{ color: 'var(--teal)', opacity: 0.18 }}
                >
                  {prog.number}
                </span>
                {prog.featured && (
                  <span className="section-label px-3 py-1.5"
                    style={{ backgroundColor: 'rgba(69,99,109,0.1)', color: 'var(--teal)' }}
                  >
                    Flagship
                  </span>
                )}
              </div>

              <h3
                className="font-serif text-3xl md:text-4xl mb-3"
                style={{ color: 'var(--ink)' }}
              >
                {prog.name}
              </h3>
              <p
                className="font-serif italic mb-6"
                style={{ color: 'var(--teal)', fontSize: '16px' }}
              >
                {prog.tagline}
              </p>

              <div className="rule-line mb-6" />

              <p
                className="leading-relaxed mb-4 flex-1"
                style={{ color: 'var(--ink)', opacity: 0.75, fontSize: '16px', lineHeight: 1.75 }}
              >
                {prog.body}
              </p>

              <p
                className="leading-relaxed mb-8 italic"
                style={{ color: 'var(--ink)', opacity: 0.55, fontSize: '15px', lineHeight: 1.75 }}
              >
                {prog.outcome}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 sm:justify-between mt-auto">
                <div>
                  <p className="section-label mb-1" style={{ color: 'var(--teal)' }}>
                    {prog.duration}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--ink)', opacity: 0.45, fontSize: '12px', letterSpacing: '0.05em' }}
                  >
                    {prog.format}
                  </p>
                </div>
                <a
                  href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 overflow-hidden transition-all duration-300 w-full sm:w-auto hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--ink)',
                    color: 'var(--canvas)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    minWidth: '140px',
                    height: '48px',
                  }}
                >
                  30 Minute Strategy Call
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}