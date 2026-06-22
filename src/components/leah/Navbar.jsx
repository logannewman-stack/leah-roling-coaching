import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'The Work', href: '#work' },
  { label: 'Method', href: '#method' },
  { label: 'Programs', href: '#programs' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Books', href: '#books' },
  { label: 'Speaking', href: '#speaking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-scrolled py-4' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <span className="font-serif text-lg tracking-wide" style={{ color: 'var(--ink)', lineHeight: 1 }}>
              Leah Roling
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="section-label teal-underline hover:text-teal transition-colors duration-200"
                style={{ color: 'var(--ink)' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/github"
              className="section-label teal-underline hover:text-teal transition-colors duration-200"
              style={{ color: 'var(--ink)' }}
            >
              Workspace
            </Link>
            <a
              href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: 'var(--ink)',
                color: 'var(--canvas)',
                letterSpacing: '0.15em',
              }}
            >
              Begin a Conversation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            style={{ color: 'var(--ink)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-12 px-8"
            style={{ backgroundColor: 'var(--canvas)' }}
          >
            <div className="rule-line mb-10" />
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-serif text-3xl font-normal"
                  style={{ color: 'var(--ink)' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="rule-line mt-10 mb-10" />
            <Link
              to="/github"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                color: 'var(--ink)',
                border: '0.5px solid rgba(18,18,18,0.25)',
                letterSpacing: '0.15em',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Project Workspace
            </Link>
            <a
              href="https://calendly.com/leahroling/30-minute-strategy-session-with-leah-?month=2026-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase"
              style={{
                backgroundColor: 'var(--ink)',
                color: 'var(--canvas)',
                letterSpacing: '0.15em',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Begin a Conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}