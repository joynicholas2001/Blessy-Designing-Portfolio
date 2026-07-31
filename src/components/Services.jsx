import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Compass, Layers, Share2, Layout, Printer, FileText, Camera, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Custom visual assets, vector art, and creative graphics tailored to communicate your brand message clearly.',
    features: ['Vector Graphics', 'Illustration', 'Infographics'],
    color: 'var(--primary)'
  },
  {
    icon: Compass,
    title: 'Logo Design',
    description: 'Memorable, scalable monograms and brandmarks crafted to stand out across modern digital and print channels.',
    features: ['Monograms & Symbols', 'Vector Formats', 'Brand Style Guide'],
    color: 'var(--secondary)'
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    description: 'End-to-end brand guidelines, typography palettes, color tokens, and corporate visual system architecture.',
    features: ['Brand Guidelines', 'Typography System', 'Stationery Suite'],
    color: 'var(--accent)'
  },
  {
    icon: Share2,
    title: 'Social Media Creatives',
    description: 'High-converting Instagram carousels, Facebook ad banners, and promotional templates built for maximum engagement.',
    features: ['Carousel Graphics', 'Ad Banners', 'Story Templates'],
    color: '#EC4899'
  },
  {
    icon: Camera,
    title: 'Photo Editing',
    description: 'High-end portrait retouching, color grading, background removal, and creative photo manipulation.',
    features: ['Retouching & Grading', 'Object Removal', 'Color Correction'],
    color: '#3B82F6'
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Services & Solutions</div>
          <h2 className="section-title">
            Specialized Design <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Providing end-to-end creative expertise to help businesses build strong brand identities and engaging visual experiences.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card"
                style={{
                  padding: '2rem 1.75rem',
                  borderRadius: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  background: '#FFFFFF'
                }}
              >
                <div>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${service.color}15`,
                    color: service.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: `0 8px 20px ${service.color}20`
                  }}>
                    <Icon size={28} />
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {service.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 500 }}>
                        <CheckCircle2 size={16} color={service.color} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: service.color,
                    marginTop: 'auto'
                  }}
                >
                  <span>Request Service</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
