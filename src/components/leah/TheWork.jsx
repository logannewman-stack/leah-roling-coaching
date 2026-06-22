import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const workItems = [
  {
    number: '01',
    title: 'I am paid to push.',
    body: "Not to validate. Not to comfort. The job is to ask the questions you have been avoiding and to stay in the room until you have answered them. If you want a coach who agrees with you, hire one. If you want one who is going to make you better, you are in the right place.",
  },
  {
    number: '02',
    title: 'I look under the hood.',
    body: "Numbers, team, leadership, schedule, case acceptance, hiring, the operator's relationship to their own time. Nothing is exempt. The work is not to fix one thing. It is to understand the whole system you are running and where it stops working.",
  },
  {
    number: '03',
    title: 'I work on the operator, not just the operation.',
    body: "The practice is a reflection of the person running it. So we work on both. Strategy, marketing, teams, leadership, organizational behavior. And the leader underneath all of those. Grow the practice. Grow the person. They were always the same project.",
  },
  {
    number: '04',
    title: 'I refuse to make you choose.',
    body: "Between revenue and rest. Between growth and family. Between the practice and the life you were building it for. Most coaches make you pick a side. The right work does not. It grows both, at the same time, without the compromise you have come to expect.",
  },
];

export default function TheWork() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="work"
      ref={ref}
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--cream-dark)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
                The Work
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl"
                style={{ color: 'var(--ink)', lineHeight: 1.1 }}
              >
                How I{' '}
                <em style={{ color: 'var(--teal)' }}>actually</em> work.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="body-narrative"
              style={{ color: 'var(--ink)', opacity: 0.7 }}
            >
              There is no curriculum. There is no script. There is the practice. The people in it,
              the numbers behind it, the operator running it. And the work is to look at all three
              until something honest comes up.
            </motion.p>
          </div>
        </div>

        {/* Work Items */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: 'rgba(18,18,18,0.12)' }}
        >
          {workItems.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="p-7 md:p-14 group"
              style={{ backgroundColor: 'var(--cream-dark)' }}
            >
              <div className="flex items-start gap-6">
                <span
                  className="font-serif text-5xl leading-none select-none flex-shrink-0"
                  style={{ color: 'var(--teal)', opacity: 0.18 }}
                >
                  {item.number}
                </span>
                <div className="pt-1">
                  <h3
                    className="font-serif text-xl md:text-2xl mb-5"
                    style={{ color: 'var(--ink)', fontStyle: 'italic' }}
                  >
                    {item.title}
                  </h3>
                  <div className="rule-line-teal w-8 mb-5" />
                  <p
                    className="leading-relaxed"
                    style={{ color: 'var(--ink)', opacity: 0.7, fontSize: '16px' }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}