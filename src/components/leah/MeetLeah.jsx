import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function MeetLeah() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <img
                src="https://media.base44.com/images/public/6a2ac4c5ac7548477e037c2a/99689204e_2023FEBLROLING_0115-8.jpg"
                alt="Leah Roling"
                className="w-full object-cover grayscale"
                style={{ aspectRatio: '4/5', maxHeight: '600px' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(249,247,242,0.3) 0%, transparent 30%)',
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
                <span className="section-label" style={{ color: 'var(--teal)' }}>
                  Meet Leah
                </span>
              </div>

              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10"
                style={{ color: 'var(--ink)', lineHeight: 1.1 }}
              >
                The coach who will say{' '}
                <em style={{ color: 'var(--teal)' }}>the thing</em>
                <br />
                nobody else will say.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.85 }}>
                Fifteen years. Hundreds of practice owners. One mission: to grow the operator and the operation at the same time, without asking either one to sacrifice for the other.
              </p>
              <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                I am a Master Certified Coach, a Certified High Performance Coach, and a John Maxwell-trained leadership coach. I hold eight-plus certifications across coaching, leadership, neurolinguistics, and human performance.
              </p>
              <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                I do not sell comfort. I do not offer a formula. I bring fifteen years of hard-won clarity into the room and stay there until you have the honest answer you were avoiding.
              </p>
              <p className="body-narrative" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                The work is not for everyone. It is for the operator who knows that good is not good enough and is ready to do something about it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10"
            >
              <a
                href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-80"
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
        </div>
      </div>
    </section>
  );
}