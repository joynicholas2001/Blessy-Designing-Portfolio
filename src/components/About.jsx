import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Lightbulb, CheckCircle, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience',
    color: 'var(--primary)',
    bg: 'rgba(79, 70, 229, 0.08)'
  },

  {
    icon: Lightbulb,
    value: '100%',
    label: 'Creative Solutions',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)'
  }
];

const expertiseList = [
  'Graphic Design',
  'Logo Design',
  'Print Media',
  'Social Media Creatives'
];

export default function About() {
  return (
    <section id="about" className="section section-bg">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="about-grid">

          {/* About Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div className="about-img-container" style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF'
            }}>
              <img
                src="/images/about.png"
                alt="John Rainhard Blessy in Creative Studio"
                className="about-img"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="about-badge" style={{
              position: 'absolute',
              background: '#FFFFFF',
              borderRadius: '1.5rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1.25rem'
              }}>
                <Sparkles size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>Design Passion</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Precision & Innovation</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">About Me</div>
            <h2 className="section-title">
              Crafting Visual Stories That <span className="gradient-text">Inspire & Connect</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              With over <strong>5 years of professional design experience</strong>, I empower brands and businesses by shaping distinct visual identities and engaging digital experiences. My approach merges artistic creativity with strategic thinking to create design solutions that resonate deeply with audiences.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              From initial conceptualization to pixel-perfect execution, I collaborate closely with clients to transform complex ideas into clean, functional, and visually compelling assets.
            </p>

            {/* Specialization Tags */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              {expertiseList.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.6rem 1rem',
                    background: '#FFFFFF',
                    borderRadius: '0.75rem',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
                    border: '1px solid var(--border-light)',
                    fontWeight: 600,
                    fontSize: '0.925rem',
                    color: 'var(--text-main)'
                  }}
                >
                  <CheckCircle size={18} color="var(--primary)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Statistics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem'
            }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      background: '#FFFFFF',
                      padding: '1.25rem 1.5rem',
                      borderRadius: '1.25rem',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: stat.bg,
                      color: stat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-img {
          height: 320px;
        }
        .about-badge {
          bottom: -1.5rem;
          right: 50%;
          transform: translateX(50%);
          padding: 1rem 1.25rem;
          width: calc(100% - 2rem);
          max-width: 280px;
        }
        @media (min-width: 480px) {
          .about-badge {
            bottom: -2rem;
            right: -1rem;
            transform: none;
            padding: 1.25rem 1.75rem;
            width: auto;
            max-width: none;
          }
        }
        @media (min-width: 768px) {
          .about-img {
            height: 480px;
          }
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
