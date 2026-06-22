import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const caseStudies = [
  {
    number: '01',
    eyebrow: 'Case Study',
    headline: 'From Chairside Burnout to Multi-Practice Sovereignty.',
    context: 'Multi-location practice owner · Mid-career',
    body: "Came in burned out. Compromising health, relationships, leadership. All of it negotiated against the practice. The work was to grow the operator first. The expansion followed. So did the operator's actual life.",
    stat1: { label: 'Practice Growth', value: '1 → 5', unit: 'locations' },
    stat2: { label: 'The Deeper Return', value: '+Health', unit: '+Family · reclaimed without sacrificing growth' },
  },
  {
    number: '02',
    eyebrow: 'Case Study',
    headline: "From $280K to Over a Million.",
    context: 'Single-location practice owner · Early-mid career',
    body: "The numbers said the practice was stuck. The operator suspected it was the practice. Most of the work was on the operator. The practice followed where the leadership led. Three years of revenue growth, two of them in the year the operator stopped overfunctioning.",
    stat1: { label: 'Annual Revenue', value: '$280K → $1M+', unit: 'single location' },
    stat2: { label: 'The Deeper Return', value: '4 → 3 days/wk', unit: 'Working less while earning more' },
  },
  {
    number: '03',
    eyebrow: 'Case Study',
    headline: 'From Burnout and the Brink, to Clarity.',
    context: 'Solo practice owner · A turning point',
    body: "When the question was whether to close or sell — the answer, after eight months of work, was neither. The operator rebuilt the practice and rebuilt the life, in the same season. The result was not what they expected. It was better.",
    stat1: { label: 'The Question', value: 'Stay or leave', unit: 'Practice at crisis point' },
    stat2: { label: 'The Answer', value: 'Neither.', unit: 'Rebuilt both — practice and life' },
  },
];

export default function Results() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section
      id="results"
      ref={ref}
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--cream-dark)' }}
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
              Results
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl"
              style={{ color: 'var(--ink)', lineHeight: 1.1 }}
            >
              The kind of{' '}
              <em style={{ color: 'var(--teal)' }}>change</em>
              <br />
              the work produces.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p
              className="body-narrative"
              style={{ color: 'var(--ink)', opacity: 0.7 }}
            >
              Three client engagements, three different operators, three different stages of growth.
              The names are private. The numbers, and the lives behind them, are real.
            </p>
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-0">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.15 }}
              className="border-t py-10 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10"
              style={{ borderColor: 'rgba(18,18,18,0.12)' }}
            >
              {/* Left — hidden on mobile, shown inline via number in center */}
              <div className="hidden lg:block lg:col-span-1">
                <span
                  className="font-serif text-4xl"
                  style={{ color: 'var(--teal)', opacity: 0.2, lineHeight: 1 }}
                >
                  {cs.number}
                </span>
              </div>

              {/* Center */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl lg:hidden" style={{ color: 'var(--teal)', opacity: 0.25 }}>{cs.number}</span>
                  <span className="section-label" style={{ color: 'var(--teal)' }}>{cs.eyebrow}</span>
                </div>
                <h3
                  className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4"
                  style={{ color: 'var(--ink)', lineHeight: 1.25 }}
                >
                  {cs.headline}
                </h3>
                <p
                  className="text-sm mb-8"
                  style={{ color: 'var(--teal)', letterSpacing: '0.05em', opacity: 0.8 }}
                >
                  {cs.context}
                </p>
                <div className="rule-line mb-8 w-12" />
                <p
                  className="body-narrative"
                  style={{ color: 'var(--ink)', opacity: 0.75, fontSize: '17px' }}
                >
                  {cs.body}
                </p>
              </div>

              {/* Right — Stats */}
              <div className="lg:col-span-4 lg:col-start-9 flex flex-row lg:flex-col gap-8 justify-start lg:justify-center border-t lg:border-t-0 pt-6 lg:pt-0" style={{ borderColor: 'rgba(18,18,18,0.10)' }}>
                <div>
                  <span className="section-label block mb-2" style={{ color: 'var(--teal)', opacity: 0.7 }}>
                    {cs.stat1.label}
                  </span>
                  <p
                    className="font-serif text-3xl md:text-4xl mb-1"
                    style={{ color: 'var(--ink)' }}
                  >
                    {cs.stat1.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--ink)', opacity: 0.45, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '11px' }}
                  >
                    {cs.stat1.unit}
                  </p>
                </div>
                <div className="rule-line-teal w-8" />
                <div>
                  <span className="section-label block mb-2" style={{ color: 'var(--teal)', opacity: 0.7 }}>
                    {cs.stat2.label}
                  </span>
                  <p
                    className="font-serif text-2xl md:text-3xl mb-1"
                    style={{ color: 'var(--teal)' }}
                  >
                    {cs.stat2.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--ink)', opacity: 0.45, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '11px' }}
                  >
                    {cs.stat2.unit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="rule-line" />
        </div>
      </div>
    </section>
  );
}