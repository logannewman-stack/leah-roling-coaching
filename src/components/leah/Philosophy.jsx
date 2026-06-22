import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Philosophy() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="reframe"
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
                The Reframe
              </span>
              <div className="rule-line-teal w-12 mb-10" />
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--teal)', lineHeight: 1.1, fontStyle: 'italic' }}>
                "High performance is not just high profitability."
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 lg:col-start-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.85 }}>
                It is the meaningful relationships you don't postpone. The health you don't
                compromise. The fulfillment that doesn't have to wait until the practice runs
                itself.
              </p>
              <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.85 }}>
                Too often, we exchange one for the other. We sacrifice. We tolerate. We negotiate
                with what matters most.
              </p>
              <div className="rule-line my-6" />
              <p
                className="font-serif text-2xl md:text-3xl italic"
                style={{ color: 'var(--ink)', lineHeight: 1.5 }}
              >
                And what matters most is{' '}
                <em style={{ color: 'var(--teal)' }}>life itself.</em>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}