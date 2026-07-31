import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0F172A', color: '#FFFFFF', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Column 1: Brand Info */}
          <div>
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 900,
                letterSpacing: '-0.025em'
              }}>
                JRB
              </div>
              <span>John Rainhard Blessy<span style={{ color: 'var(--accent)' }}>.</span></span>
            </a>
            <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '300px' }}>
              Senior Creative Designer with 5+ years of professional experience crafting brand identities, digital UI, and high-impact social media creatives.
            </p>

          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: '#FFFFFF' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['About', 'Skills', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{ color: '#94A3B8', fontSize: '0.925rem', transition: 'color 0.2s ease' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Summary */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: '#FFFFFF' }}>Specializations</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94A3B8', fontSize: '0.925rem' }}>
              <li>Graphic Design</li>
              <li>Brand Identity & Guidelines</li>
              <li>Logo & Vector Design</li>
              <li>Social Media Ad Creatives</li>
              <li>Editorial & Print Media</li>
            </ul>
          </div>

          {/* Column 4: Contact Teaser */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: '#FFFFFF' }}>Let's Talk</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.925rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              Ready to elevate your brand's visual identity?
            </p>
            <a href="#contact" className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}>
              <span>Start a Project</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          color: '#94A3B8',
          fontSize: '0.875rem'
        }}>
          <div>
            © {new Date().getFullYear()} John Rainhard Blessy. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFFFFF',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '99px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
