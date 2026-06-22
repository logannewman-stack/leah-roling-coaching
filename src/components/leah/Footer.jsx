import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const navLinks = [
  { label: 'The Work', href: '#work' },
  { label: 'Method', href: '#method' },
  { label: 'Programs', href: '#programs' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Speaking', href: '#speaking' },
];

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: 'ig' },
  { label: 'YouTube', href: '#', icon: 'yt' },
  { label: 'TikTok', href: '#', icon: 'tk' },
  { label: 'Apple Podcasts', href: '#', icon: 'ap' },
  { label: 'Spotify', href: '#', icon: 'sp' },
  { label: 'Facebook', href: '#', icon: 'fb' },
];

const ecosystemLinks = [
  { label: 'Leah Roling', href: '#' },
  { label: 'InnerBoard', href: '#' },
  { label: 'Academy', href: '#' },
  { label: 'InnerLab', href: '#' },
  { label: 'OS', href: '#' },
  { label: 'The Show', href: '#' },
];

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={ref}
      className="px-5 md:px-10"
      style={{ backgroundColor: 'var(--ink)' }}
    >
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="py-16 md:py-32 border-b flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12"
        style={{ borderColor: 'rgba(249,247,242,0.12)' }}
      >
        <div className="max-w-2xl">
          <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
            Begin the Work
          </span>
          <h2
            className="font-serif text-3xl md:text-5xl lg:text-6xl"
            style={{ color: 'var(--canvas)', lineHeight: 1.1 }}
          >
            The right work starts with{' '}
            <em style={{ color: 'var(--teal)' }}>one conversation.</em>
          </h2>
        </div>

        <a
          href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full lg:w-auto px-10 py-5 text-xs font-semibold tracking-widest uppercase flex-shrink-0 transition-all duration-300 hover:opacity-80"
          style={{
            backgroundColor: 'var(--canvas)',
            color: 'var(--ink)',
            letterSpacing: '0.15em',
          }}
        >
          Begin a Conversation
        </a>
      </motion.div>

      {/* Footer Middle */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p
            className="font-serif text-xl mb-2"
            style={{ color: 'var(--canvas)', opacity: 0.9 }}
          >
            Leah Roling
          </p>
          <p className="section-label" style={{ color: 'var(--teal)' }}>
            Coaching
          </p>
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: 'rgba(249,247,242,0.45)', fontSize: '14px', lineHeight: 1.7 }}
          >
            For ambitious dental practice owners who know that good is not good enough.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <p className="section-label mb-2" style={{ color: 'rgba(249,247,242,0.35)' }}>
            Navigate
          </p>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left teal-underline text-sm transition-colors duration-200 w-fit"
              style={{ color: 'rgba(249,247,242,0.65)', fontSize: '14px' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Ecosystem */}
        <div className="flex flex-col gap-3">
          <p className="section-label mb-2" style={{ color: 'rgba(249,247,242,0.35)' }}>
            Ecosystem
          </p>
          {ecosystemLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left teal-underline text-sm transition-colors duration-200 w-fit"
              style={{ color: 'rgba(249,247,242,0.65)', fontSize: '14px' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social & Contact */}
        <div>
          <p className="section-label mb-6" style={{ color: 'rgba(249,247,242,0.35)' }}>
            Start Here
          </p>
          <a
            href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm mb-6 transition-colors duration-200"
            style={{ color: 'rgba(249,247,242,0.65)', fontSize: '14px' }}
          >
            30 Minute Strategy Call
          </a>
          <p
            className="text-sm mb-6"
            style={{ color: 'rgba(249,247,242,0.35)', fontSize: '13px' }}
          >
            Virtual and in-person engagements available nationwide.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="section-label transition-colors duration-200 hover:opacity-60"
                style={{ color: 'rgba(249,247,242,0.5)', fontSize: '11px', letterSpacing: '0.1em' }}
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="rule-line-teal w-8 my-5" style={{ opacity: 0.2 }} />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label transition-colors duration-200 hover:opacity-60"
            style={{ color: 'var(--teal)', fontSize: '11px', letterSpacing: '0.1em' }}
          >
            Linktr.ee →
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="py-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderColor: 'rgba(249,247,242,0.08)' }}
      >
        <p
          className="text-xs"
          style={{ color: 'rgba(249,247,242,0.25)', letterSpacing: '0.06em' }}
        >
          &copy; {new Date().getFullYear()} Leah Roling Coaching. All rights reserved.
        </p>
        <p
          className="text-xs"
          style={{ color: 'rgba(249,247,242,0.2)', letterSpacing: '0.06em' }}
        >
          Coaching for Dental Practice Owners & Founders
        </p>
      </div>
    </footer>
  );
}