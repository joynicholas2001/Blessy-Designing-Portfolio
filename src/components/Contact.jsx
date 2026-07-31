import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, PhoneCall } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <div className="badge">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or looking for a senior creative designer for your brand? Drop a message below and let's collaborate!
          </p>
        </div>

        <div style={{
          maxWidth: '750px',
          margin: '0 auto',
          textAlign: 'center'
        }}>

          {/* Contact Details & Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Feel free to reach out via email or phone. Available for freelance projects, brand design retainer, and full-time creative direction.
              </p>
            </div>

            <div className="contact-info-grid" style={{ marginBottom: '1.5rem' }}>
              {/* Email Card */}
              <div className="glass-card contact-card" style={{ borderRadius: '1.25rem', display: 'flex', alignItems: 'center', background: '#FFFFFF', textAlign: 'left' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={24} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 500 }}>Email Me</div>
                  <a href="mailto:blessykattupalli@gmail.com" style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--text-main)', wordBreak: 'break-word' }}>
                    blessykattupalli@gmail.com
                  </a>
                </div>
              </div>

              {/* Call / WhatsApp Card */}
              <div className="glass-card contact-card" style={{ borderRadius: '1.25rem', display: 'flex', alignItems: 'flex-start', background: '#FFFFFF', textAlign: 'left', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    color: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={24} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 500 }}>Call / WhatsApp</div>
                    <div style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      +91 9502104675
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', width: '100%' }}>
                  <a
                    href="tel:+919502104675"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '10px',
                      background: 'var(--primary)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <PhoneCall size={15} />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919502104675"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '10px',
                      background: '#25D366',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {/* WhatsApp icon inline SVG */}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      <style>{`
        .contact-info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        .contact-card {
          padding: 1.25rem 1.15rem;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .contact-card {
            padding: 1.25rem 1.5rem;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
