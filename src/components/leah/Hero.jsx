import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-28 md:pt-40 px-5 md:px-10 overflow-hidden"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      {/* Background ambient texture + photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(69,99,109,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="absolute right-0 top-12 md:top-8 w-80 md:w-[680px] h-[550px] md:h-[850px] pointer-events-none opacity-[0.45]">
        <img
          src="https://media.base44.com/images/public/6a2ac4c5ac7548477e037c2a/1c24c3d22_IMG_9509.png"
          alt=""
          className="w-full h-full object-cover object-top grayscale"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, transparent 0%, transparent 50%, var(--canvas) 85%), linear-gradient(to left, transparent 0%, transparent 35%, var(--canvas) 75%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Tag */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="flex items-center gap-3 mb-6 md:mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
          <span className="section-label">Coaching for Dental Practice Owners & Founders</span>
        </motion.div>

        {/* Hero Headline */}
        <div className="max-w-5xl">
          <motion.h1
            className="hero-display"
            style={{ color: 'var(--ink)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            For{' '}
            <em className="not-italic" style={{ color: 'var(--teal)', fontStyle: 'italic' }}>
              ambitious
            </em>{' '}
            dental practice owners
          </motion.h1>

          <motion.h1
            className="hero-display"
            style={{ color: 'var(--ink)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            who know that{' '}
            <em style={{ color: 'var(--teal)' }}>good</em> isn't good enough.
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="mt-8 mb-6 w-12 md:w-20 rule-line-teal"
        />

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="body-narrative max-w-2xl"
          style={{ color: 'var(--ink)', opacity: 0.8 }}
        >
          Practice growth. Leadership growth. And a{' '}
          <span
            className="font-serif italic teal-underline cursor-default"
            style={{ color: 'var(--teal)' }}
          >
            return on the life
          </span>{' '}
          you've been negotiating away.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="body-narrative max-w-xl mt-4"
          style={{ color: 'var(--ink)', opacity: 0.65 }}
        >
          I am paid to push. To challenge. To look under the hood and find what the spreadsheet
          won't say.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
          className="flex flex-col sm:flex-row gap-3 mt-10"
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
          <button
            onClick={() => {
              const el = document.querySelector('#programs');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-60 border"
            style={{
              borderColor: 'rgba(18,18,18,0.25)',
              color: 'var(--ink)',
              letterSpacing: '0.15em',
            }}
          >
            See the Programs
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-10 flex items-center gap-3"
        style={{ color: 'var(--teal)' }}
      >
        <span className="section-label">Scroll</span>
        <div className="flex flex-col gap-1">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-8 mx-auto"
            style={{ backgroundColor: 'var(--teal)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}