import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';

const stats = [
  { value: '15', suffix: '+', label: 'Years coaching' },
  { value: '85', suffix: '%', label: 'Dental practice owners' },
  { value: '8', suffix: '+', label: 'Coach certifications', detail: 'MCC · CHPC · John Maxwell' },
  { value: '5', suffix: '★', label: 'Client outcomes' },
];

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-5 md:px-10 border-t border-b"
      style={{
        borderColor: 'rgba(18,18,18,0.12)',
        backgroundColor: 'var(--canvas)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x"
          style={{ '--tw-divide-opacity': '0.12' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-2 md:px-10 first:pl-0 last:pr-0"
            >
              <div className="flex items-end gap-1">
                <span className="stat-number" style={{ color: 'var(--ink)' }}>
                  {stat.value}
                </span>
                <span
                  className="font-serif text-xl pb-1"
                  style={{ color: 'var(--teal)' }}
                >
                  {stat.suffix}
                </span>
              </div>
              <div className="rule-line-teal w-8 my-1" />
              <span
                className="section-label block"
                style={{ color: 'var(--ink)', opacity: 0.55 }}
              >
                {stat.label}
              </span>
              {stat.detail && (
                <span
                  className="block mt-1"
                  style={{ color: 'var(--teal)', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.75 }}
                >
                  {stat.detail}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}