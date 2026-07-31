import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  // Lock body scroll when modal is open to prevent CLS / layout jumps
  useEffect(() => {
    if (!item) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [item]);

  // Close on Escape key and navigate on arrow keys
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => { 
      if (e.key === 'Escape') onClose(); 
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [item, onClose, hasNext, hasPrev, onNext, onPrev]);

  // Render into document.body via a portal so position:fixed is always
  // relative to the true viewport — not offset by any parent's transform/overflow
  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            overflowY: 'auto',
          }}
        >
          <motion.div
            key="lightbox-card"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '1.5rem',
              width: '100%',
              maxWidth: '900px',
              /* Fit inside the viewport with breathing room */
              maxHeight: 'calc(100dvh - 2rem)',
              overflowY: 'auto',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.45)',
              position: 'relative',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* ── Close Button ── */}
            <button
              onClick={onClose}
              aria-label="Close preview"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.65)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.25)',
                transition: 'background 0.2s ease',
                flexShrink: 0,
              }}
            >
              <X size={20} />
            </button>

            {/* ── Content Grid ── */}
            <div className="lightbox-grid" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>

              {/* Image Panel */}
              <div style={{
                background: '#0F172A',
                borderRadius: '1.5rem 1.5rem 0 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '240px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {hasPrev && (
                  <button
                    onClick={onPrev}
                    aria-label="Previous item"
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(15, 23, 42, 0.65)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.25)',
                      transition: 'background 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                
                {hasNext && (
                  <button
                    onClick={onNext}
                    aria-label="Next item"
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(15, 23, 42, 0.65)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.25)',
                      transition: 'background 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
                
                <img
                  src={item.image}
                  alt={item.title}
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => {
                    if (item.fallback) e.target.src = item.fallback;
                  }}
                />
              </div>

              {/* Details Panel */}
              <div style={{ padding: '1.5rem 2rem 2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge" style={{ marginBottom: 0, fontSize: '0.75rem' }}>
                    <Tag size={12} />
                    <span>{item.category}</span>
                  </span>
                  {item.designModel && (
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--secondary)',
                      background: 'rgba(124, 58, 237, 0.1)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                    }}>
                      {item.designModel}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {item.tools.map((tool, idx) => (
                    <span key={idx} style={{
                      padding: '0.3rem 0.7rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-light)',
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onClose}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .lightbox-grid {
            grid-template-columns: 1.3fr 0.7fr !important;
          }
          .lightbox-grid > div:first-child {
            border-radius: 1.5rem 0 0 1.5rem !important;
          }
          .lightbox-grid > div:last-child {
            border-radius: 0 1.5rem 1.5rem 0 !important;
          }
        }
      `}</style>
    </AnimatePresence>,
    document.body
  );
}
