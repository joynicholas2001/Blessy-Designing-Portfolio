import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Figma, Sparkles, Layers, Image, Layout, Compass, Share2, Printer, Camera } from 'lucide-react';

const skills = [
  { name: 'Adobe Photoshop', category: 'Design Tools', icon: Image, level: '95%', color: '#31A8FF' },
  { name: 'Canva', category: 'Speed Creatives', icon: Sparkles, level: '98%', color: '#00C4CC' },
  { name: 'Logo Design', category: 'Identity & Symbols', icon: Layers, level: '92%', color: '#EC4899' },
  { name: 'Social Media Design', category: 'Marketing Media', icon: Share2, level: '96%', color: 'var(--accent)' },
  { name: 'Print Design', category: 'Editorial & Print', icon: Printer, level: '90%', color: '#8B5CF6' },
  { name: 'Photo Editing', category: 'Retouching & Color', icon: Camera, level: '94%', color: '#10B981' },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Skills & Tools</div>
          <h2 className="section-title">
            Creative Toolkit & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            Mastering industry-standard design tools and creative methodologies to bring ideas to life with elegance and technical precision.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass-card"
                style={{
                  padding: '1.75rem 1.5rem',
                  borderRadius: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Accent Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${skill.color}, var(--primary))`
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `${skill.color}15`,
                    color: skill.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 16px ${skill.color}20`
                  }}>
                    <Icon size={26} />
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-light)'
                  }}>
                    {skill.level}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {skill.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {skill.category}
                </p>

                {/* Animated Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: 'var(--border-light)',
                  borderRadius: '99px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                    style={{
                      height: '100%',
                      borderRadius: '99px',
                      background: `linear-gradient(90deg, ${skill.color}, var(--primary))`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
