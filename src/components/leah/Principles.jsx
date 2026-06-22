import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const principles = [
  {
    number: '01',
    title: 'Follow through is a yes or a no.',
    emphasis: 'Yes or no.',
    body: 'Not a story. Not an explanation. Not an apology. It becomes a pattern. The pattern becomes trust. Trust becomes opportunity. Everything you want from this work depends on this one truth.',
  },
  {
    number: '02',
    title: 'Boundaries protect priorities, not preferences.',
    emphasis: 'This is the work of the operator who runs the room.',
    body: 'At the highest level of performance, a boundary is not a wall around your comfort. It is the protection around your ability to deliver. The protection around what matters most.',
  },
  {
    number: '03',
    title: 'Avoidance is a short-term feeling.',
    emphasis: 'And a long-term strategy for suffering.',
    body: 'It feels good in the moment. It costs you everything that mattered, slowly, over time. Your next level will never be reached by avoidance. It will be reached by the volunteer heart, by the willingness, by the work you have been putting off.',
  },
];

export default function Principles() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="principles"
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--cream-dark)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-20"
        >
          <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
            What the Work Demands
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-2xl"
            style={{ color: 'var(--ink)', lineHeight: 1.1 }}
          >
            The principles that{' '}
            <em style={{ color: 'var(--teal)' }}>don't bend.</em>
          </h2>
        </motion.div>

        <p
          className="body-narrative mb-10 md:mb-16 max-w-xl"
          style={{ color: 'var(--ink)', opacity: 0.65 }}
        >
          These are the three lines I will hold you to. From the first conversation through the
          last. This is the bar.
        </p>

        {/* Principles */}
        <div className="space-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              className="py-8 md:py-16 border-t grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8"
              style={{ borderColor: 'rgba(18,18,18,0.12)' }}
            >
              <div className="hidden lg:block lg:col-span-1">
                <span
                  className="font-serif text-5xl"
                  style={{ color: 'var(--teal)', opacity: 0.25, lineHeight: 1 }}
                >
                  {p.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3
                  className="font-serif text-2xl md:text-3xl"
                  style={{ color: 'var(--ink)', lineHeight: 1.3, fontStyle: 'italic' }}
                >
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p
                  className="font-serif text-lg italic mb-4"
                  style={{ color: 'var(--teal)' }}
                >
                  {p.emphasis}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--ink)', opacity: 0.7, fontSize: '17px' }}
                >
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="rule-line pt-0" />
        </div>
      </div>
    </section>
  );
}