import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FolderKanban, Award, Palette, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: '9rem', paddingBottom: '5rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Decorative ambient background glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="badge">
              <Sparkles size={16} />
              <span>Senior Creative Designer</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Hi, I'm <span className="gradient-text">John Rainhard Blessy</span>
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 600,
              color: 'var(--primary)',
              marginBottom: '1.5rem',
              lineHeight: 1.3
            }}>
              Creative Designer with 5+ Years of Experience
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              maxWidth: '620px',
              lineHeight: 1.7
            }}>
              Specializing in high-impact <strong>Branding</strong>, <strong>Graphic Design</strong>, <strong>UI Design</strong>, <strong>Social Media Creatives</strong>, and comprehensive <strong>Digital Solutions</strong>. I transform brand visions into unforgettable visual experiences that drive growth.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem' }}>
              <a href="#portfolio" className="btn-primary">
                <span>View Portfolio</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Contact Me</span>
              </a>
            </div>

            {/* Key Highlights */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem 2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem' }}>
                <CheckCircle2 size={20} color="var(--primary)" />
                <span>5+ Years Experience</span>
              </div>

            </div>
          </motion.div>

          {/* Hero Image / Floating Card Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              aspectRatio: '4 / 5',
              borderRadius: '2rem',
              padding: '12px',
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.3) 0%, rgba(124, 58, 237, 0.1) 100%)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#F1F5F9'
                }}
              >
                <img
                  src="/images/profile_photo.jpg"
                  alt="John Rainhard Blessy - Senior Creative Designer"
                  width="520"
                  height="650"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />


                {/* Floating Experience Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '1.25rem',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '1px solid rgba(255,255,255,0.8)'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>5+ Years</div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 500 }}>Industry Expertise</div>
                  </div>
                </div>

                {/* Floating Creative Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  border: '1px solid rgba(255,255,255,0.8)'
                }}>
                  <Palette size={20} color="var(--secondary)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>Design Specialist</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
