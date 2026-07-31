import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map(link => link.href.substring(2));
    const current = sections.find(section => {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    // passive: true prevents scroll-blocking, keeping scrolling at 60fps
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.05)' : 'none',
        padding: scrolled ? '0.9rem 0' : '1.3rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', letterSpacing: '-0.03em' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
            flexShrink: 0
          }}>
            <Sparkles size={22} />
          </div>
          <span>John Rainhard Blessy<span className="gradient-text">.</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: activeSection === link.href.substring(2) ? 'var(--primary)' : 'var(--text-main)',
                position: 'relative',
                transition: 'color 0.2s ease'
              }}
            >
              {link.name}
              {activeSection === link.href.substring(2) && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    right: 0,
                    height: '2.5px',
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    borderRadius: '4px'
                  }}
                />
              )}
            </Link>
          ))}
          <a href="/#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
            <span>Hire Me</span>
            <Send size={16} />
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'rgba(241, 245, 249, 0.8)',
            color: 'var(--text-main)'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: '#FFFFFF',
              borderBottom: '1px solid var(--border-light)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
          >
            <div className="container" style={{ padding: '1.5rem 1.5rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: activeSection === link.href.substring(2) ? 'var(--primary)' : 'var(--text-main)',
                    display: 'block',
                    padding: '0.4rem 0'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ textAlign: 'center', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                <span>Hire Me</span>
                <Send size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
});

export default Navbar;

