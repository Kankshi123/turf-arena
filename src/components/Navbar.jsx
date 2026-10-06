import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../data/siteData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sports', href: '#sports' },
  { label: 'Turfs', href: '#turfs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const menuVariants = {
  closed: { x: '100%', opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' } },
  exit: { x: '100%', opacity: 0, transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' } },
};

const linkVariants = {
  closed: { x: 60, opacity: 0 },
  open: (i) => ({ x: 0, opacity: 1, transition: { delay: 0.1 + i * 0.07, duration: 0.4 } }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(34,197,94,0.15)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="flex items-center gap-3 group"
              aria-label="The Collective Arena - Home"
            >
              <div className="relative">
                <svg width="36" height="36" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="#ef4444" />
                  <path d="M18 2 Q24 10 24 18 Q24 26 18 34" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3 2" />
                  <path d="M18 2 Q12 10 12 18 Q12 26 18 34" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3 2" />
                </svg>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: '0 0 20px #ef4444' }} />
              </div>
              <div className="leading-none">
                <div
                  className="text-white font-black text-lg tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  THE COLLECTIVE
                </div>
                <div
                  className="text-sm font-bold tracking-[0.2em]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ARENA
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="animated-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#booking"
                onClick={(e) => { e.preventDefault(); scrollTo('#booking'); }}
                className="hidden md:block px-5 py-2.5 rounded-lg font-semibold text-sm text-black transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  boxShadow: '0 0 20px rgba(34,197,94,0.4)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Book Now ⚡
              </a>

              {/* Hamburger */}
              <button
                className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <motion.span
                  className="block w-6 h-0.5 bg-white origin-center"
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-white"
                  animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-white origin-center"
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            {/* Background decoration */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle at 80% 20%, #22c55e 0%, transparent 50%), radial-gradient(circle at 20% 80%, #ef4444 0%, transparent 50%)',
              }}
            />

            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="text-4xl font-black tracking-wider text-white hover:text-green-400 transition-colors duration-200 py-3 w-full text-center"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={(e) => { e.preventDefault(); scrollTo('#booking'); }}
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-6 px-8 py-4 rounded-xl font-bold text-xl text-black w-full text-center"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  boxShadow: '0 0 30px rgba(34,197,94,0.5)',
                  fontFamily: "'Oswald', sans-serif",
                }}
              >
                ⚡ BOOK YOUR SLOT
              </motion.a>
            </div>

            {/* Footer in mobile menu */}
            <motion.div
              className="p-6 text-center text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              📍 {BRAND.address}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
