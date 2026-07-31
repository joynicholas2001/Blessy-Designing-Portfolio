import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director, Aura Luxe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Blessy transformed our brand identity completely! Her attention to detail, sleek modern aesthetic, and quick turnaround made working with her an absolute pleasure. Highly recommended!'
  },
  {
    name: 'David Chen',
    role: 'Co-Founder, Zenith Fintech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'The UI designs Blessy created for our mobile app were stunning. Our user engagement shot up by 150% after launching the new interface. She is a true creative powerhouse.'
  },
  {
    name: 'Emily Watson',
    role: 'Brand Manager, Vogue Media',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Working with Blessy on our social media ad campaigns was seamless. She delivers top-tier creative graphics consistently with zero stress. 5+ years of experience definitely shows!'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Client Endorsements</div>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle">
            Trusted by brand managers, founders, and creative directors worldwide.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: '#FFFFFF'
              }}
            >
              {/* Quote Mark Icon */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: 'rgba(79, 70, 229, 0.12)'
              }}>
                <Quote size={48} />
              </div>

              <div>
                {/* 5 Star Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                  "{t.review}"
                </p>
              </div>

              {/* Client Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--primary)'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
