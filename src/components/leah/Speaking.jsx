import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const topics = [
  {
    title: 'The Operator Underneath the Operation',
    body: 'Why the most important thing in your practice is the person running it — and what happens when that person operates at their best.',
  },
  {
    title: 'High Performance Without the Sacrifice',
    body: 'The framework for growing a practice and a life at the same time. Built across fifteen years of work with the operators who are actually doing both.',
  },
  {
    title: 'The Architecture of Self-Leadership',
    body: 'The five internal systems that determine whether a leader shows up at their best or their most reactive. A masterclass in STEAR.',
  },
  {
    title: 'The InnerBoard: Four Voices in Every Room',
    body: 'How to identify which part of you is running the meeting — and how to put the right one in charge when the stakes are highest.',
  },
];

export default function Speaking() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="speaking"
      ref={ref}
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
                Speaking
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8"
                style={{ color: 'var(--ink)', lineHeight: 1.1 }}
              >
                The work{' '}
                <em style={{ color: 'var(--teal)' }}>on stage.</em>
              </h2>
              <div className="rule-line mb-8 w-12" />
              <p
                className="body-narrative mb-10"
                style={{ color: 'var(--ink)', opacity: 0.75 }}
              >
                Available for keynotes, leadership intensives, and practice group conferences.
                Each engagement is designed to leave the room with something they will use
                tomorrow morning.
              </p>
              <p
                className="body-narrative mb-10"
                style={{ color: 'var(--ink)', opacity: 0.6, fontSize: '16px' }}
              >
                Available in-person and virtually. Topics adapted to your audience and context. 
                Typically 45 to 90 minutes, with optional Q&A.
              </p>
              <a
                href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-75"
                style={{
                  backgroundColor: 'var(--ink)',
                  color: 'var(--canvas)',
                  letterSpacing: '0.15em',
                }}
              >
                30 Minute Strategy Call
              </a>
            </motion.div>
          </div>

          {/* Right — Photo + Topics */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <img
                src="https://media.base44.com/images/public/6a2ac4c5ac7548477e037c2a/60d3d4f4a_IMG_9510.png"
                alt="Leah Roling speaking on stage at an event"
                className="w-full object-cover grayscale"
                style={{ maxHeight: '420px' }}
                loading="lazy"
              />
              <div className="rule-line-teal w-8 mt-5 mb-3" />
              <span className="section-label" style={{ color: 'var(--teal)' }}>Keynote · Align 2024</span>
            </motion.div>

            <div className="space-y-0">
              {topics.map((topic, i) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                  className="py-8 border-t group cursor-default"
                  style={{ borderColor: 'rgba(18,18,18,0.12)' }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="section-label mt-1 flex-shrink-0"
                      style={{ color: 'var(--teal)', opacity: 0.5 }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h4
                        className="font-serif text-xl md:text-2xl mb-4 transition-colors duration-300"
                        style={{ color: 'var(--ink)', lineHeight: 1.3 }}
                      >
                        {topic.title}
                      </h4>
                      <p
                        className="leading-relaxed"
                        style={{ color: 'var(--ink)', opacity: 0.6, fontSize: '16px' }}
                      >
                        {topic.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="rule-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}