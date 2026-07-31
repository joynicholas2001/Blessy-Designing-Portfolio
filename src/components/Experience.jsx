import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, CheckCircle, Sparkles, Building } from 'lucide-react';

const timeline = [
  {
    period: '2023 - Present',
    role: 'Senior Creative Lead & Brand Strategist',
    company: 'Independent Creative Studio / Freelance',
    description: 'Leading end-to-end design solutions for global clients, handling brand strategy, UI/UX systems, and digital creative direction. Achieved 99%+ client satisfaction rate across 50+ projects.',
    highlights: ['5+ Years Senior Industry Experience', 'Managed 100+ end-to-end client deliverables', 'Specialized in UI/UX & Brand Identity']
  },
  {
    period: '2021 - 2023',
    role: 'Senior Graphic & UI Designer',
    company: 'Nexus Creative Agency',
    description: 'Spearheaded brand redesigns, social media marketing campaigns, and interactive UI component design for fast-growing startups and retail brands.',
    highlights: ['Worked with 30+ international brands', 'Created high-converting ad creatives', 'Led team of junior designers']
  },
  {
    period: '2019 - 2021',
    role: 'Graphic Designer & Visual Artist',
    company: 'PixelCraft Studio',
    description: 'Designed print media collateral, corporate logo identities, packaging concepts, and promotional materials for commercial campaigns.',
    highlights: ['Designed 50+ unique brand logos', 'Expert in Photoshop & Illustrator prepress', 'Delivered print & editorial packages']
  },
  {
    period: '2018 - 2019',
    role: 'Junior UI & Brand Designer',
    company: 'Vision Digital Agency',
    description: 'Created social media creatives, banner ads, and assisted in crafting wireframes and asset libraries for web applications.',
    highlights: ['Mastered Figma & Canva workflows', 'Created over 500+ social graphics', 'Client satisfaction excellence']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <div className="badge">Career Journey</div>
          <h2 className="section-title">
             5+ Years of Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A proven track record of delivering world-class visual solutions, collaborating with multiple brands, and exceeding client expectations.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Vertical Center Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '24px',
            width: '3px',
            background: 'linear-gradient(to bottom, var(--primary), var(--secondary), var(--accent))',
            borderRadius: '99px'
          }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  position: 'relative',
                  paddingLeft: '70px'
                }}
              >
                {/* Timeline Node Icon */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '3px solid var(--primary)',
                  boxShadow: '0 0 15px rgba(79, 70, 229, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  zIndex: 2
                }}>
                  <Briefcase size={22} />
                </div>

                {/* Timeline Card */}
                <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.5rem', background: '#FFFFFF' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      background: 'var(--primary-light)',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '99px'
                    }}>
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Building size={16} />
                      <span>{item.company}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    {item.role}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    {item.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        <CheckCircle size={15} color="var(--primary)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
