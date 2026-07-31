import React, { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Sparkles, Filter, ArrowRight, Maximize } from 'lucide-react';
import LightboxModal from './LightboxModal';
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    title: '24-Hour Prayer & Worship Event Poster',
    designModel: 'Event Poster / Print & Digital Flyer',
    category: 'Print Media',
    image: '/images/user_portfolio_1.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Custom event flyer design model featuring dual-tone purple gradient curved layout, custom typography composition, speaker portrait integrations, and event schedule typography.',
    tools: ['Adobe Photoshop', 'Typography Layout', 'Event Branding']
  },
  {
    id: 2,
    title: 'Christmas Festival Worship Celebration Banner',
    designModel: 'Festive Celebration Banner / Poster Model',
    category: 'Social Media',
    image: '/images/user_portfolio_2.jpg',
    fallback: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80',
    description: 'Festive Christmas celebration poster design model with 3D gold typography headers, ambient lens flare glow, bokeh lighting textures, and multi-portrait composition.',
    tools: ['Adobe Photoshop', '3D Typography', 'Festive Graphics']
  },
  {
    id: 3,
    title: '2026 Year of Breakthrough New Year Poster',
    designModel: 'Inspirational Sunrise Poster Model',
    category: 'Social Media',
    image: '/images/user_portfolio_3.jpg',
    fallback: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    description: 'Inspirational theme poster featuring mountain peak silhouette artwork, radiant sunrise background glow, custom script typography, and speaker portrait framing.',
    tools: ['Photoshop', 'Digital Painting', 'Poster Art']
  },
  {
    id: 4,
    title: '23rd Anniversary Metallic Emblem Banner',
    designModel: '3D Gold Emblem & Badge Design Model',
    category: 'Social Media',
    image: '/images/user_portfolio_4.jpg',
    fallback: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury 3D golden hexagon badge and ribbon emblem design model created for a 23rd anniversary celebration event, with metallic beveling and textured background.',
    tools: ['3D Emblem Design', 'Adobe Illustrator', 'Branding']
  },
  {
    id: 5,
    title: 'Pastors Fellowship Conference Banner',
    designModel: 'Conference Banner / Fellowship Flyer Model',
    category: 'Print Media',
    image: '/images/user_portfolio_5.jpg',
    fallback: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Formal conference event banner model with dynamic white diagonal banner overlay, dove vector emblem, warm gradient backdrop, and venue info layout.',
    tools: ['Photoshop', 'Vector Art', 'Conference Media']
  },

  {
    id: 10,
    title: 'Holy Spirit Festivals Day 3 Poster',
    designModel: 'Church Event Flyer Model',
    category: 'Print Media',
    image: '/images/user_portfolio_6.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic church festival flyer with dramatic lighting, bold typography, and multi-portrait composition for a three-day religious event.',
    tools: ['Photoshop', 'Event Design']
  },
  {
    id: 11,
    title: 'Power to get Wealth Banner',
    designModel: 'Inspirational Christian Poster',
    category: 'Social Media',
    image: '/images/user_portfolio_7.jpg',
    fallback: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant inspirational poster featuring high-contrast subject framing, expressive custom typography, and dynamic lens flare effects.',
    tools: ['Photoshop', 'Typography']
  },
  {
    id: 12,
    title: 'I Will Give You Peace Poster',
    designModel: 'Pastoral Theme Flyer',
    category: 'Print Media',
    image: '/images/user_portfolio_8.jpg',
    fallback: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    description: 'Soft pink and orange gradient thematic poster with elegant layout, spiritual messaging, and balanced subject imagery.',
    tools: ['Photoshop', 'Layout Design']
  },
  {
    id: 13,
    title: 'Holy Spirit Festivals Final Day',
    designModel: 'Final Event Day Promo Model',
    category: 'Social Media',
    image: '/images/user_portfolio_9.png',
    fallback: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Striking yellow-themed promotional poster for the final day of the Holy Spirit Festivals, utilizing high-impact color contrast and bold 3D text.',
    tools: ['Photoshop', 'Color Grading']
  },
  {
    id: 14,
    title: 'I Am With You Always Poster',
    designModel: 'Teaching Event Series Model',
    category: 'Print Media',
    image: '/images/user_portfolio_10.jpg',
    fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Deep purple themed teaching event design featuring Jesus artwork, pastoral portraits, and a clean structured layout for clear messaging.',
    tools: ['Photoshop', 'Composition']
  },

  {
    id: 19,
    title: 'Holy Spirit Festivals Day 4',
    designModel: 'Event Day Promo',
    category: 'Social Media',
    image: '/images/user_portfolio_15.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant square format promotional flyer for day 4 of the Holy Spirit Festivals featuring a clean portrait layout.',
    tools: ['Photoshop', 'Event Promo']
  },
  {
    id: 20,
    title: 'Good Friday Worship Banner',
    designModel: 'Church Service Flyer',
    category: 'Social Media',
    image: '/images/user_portfolio_16.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic Good Friday worship event flyer with powerful imagery, elegant custom typography, and deep red ambient lighting.',
    tools: ['Photoshop', 'Typography']
  },
  {
    id: 21,
    title: 'Holy Spirit Festivals Multi-Day Poster',
    designModel: 'Conference Schedule Model',
    category: 'Print Media',
    image: '/images/user_portfolio_17.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive multi-day festival poster showcasing multiple speaker portraits, clear event scheduling, and dynamic background composition.',
    tools: ['Photoshop', 'Layout Design']
  },
  {
    id: 22,
    title: 'Resurrection Sunday Worship',
    designModel: 'Easter Event Graphic',
    category: 'Social Media',
    image: '/images/user_portfolio_18.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Inspirational Easter Sunday worship graphic featuring the empty tomb, warm sunrise lighting, and bold classic typography.',
    tools: ['Photoshop', 'Digital Art']
  },
  {
    id: 23,
    title: 'Palm Sunday Celebration',
    designModel: 'Special Service Post',
    category: 'Social Media',
    image: '/images/user_portfolio_19.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh and vibrant Palm Sunday event poster framed with palm leaf graphics, bright lighting, and an engaging portrait composition.',
    tools: ['Photoshop', 'Social Strategy']
  },
  {
    id: 24,
    title: 'Keyboard Classes Promotional Poster',
    designModel: 'Educational Course Ad',
    category: 'Print Media',
    image: '/images/user_portfolio_20.png',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Engaging promotional poster for music keyboard classes featuring dynamic piano key graphics and clear course details.',
    tools: ['Photoshop', 'Typography Layout']
  },
  {
    id: 25,
    title: 'Holy Spirit Festivals Day 2 (May)',
    designModel: 'Church Event Promo',
    category: 'Social Media',
    image: '/images/user_portfolio_21.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant green-themed promotional event flyer with bold 3D typography and dual-portrait layout.',
    tools: ['Photoshop', 'Event Design']
  },
  {
    id: 26,
    title: 'Holy Spirit Festivals Day 2 (April)',
    designModel: 'Conference Flyer',
    category: 'Social Media',
    image: '/images/user_portfolio_22.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Dynamic two-tone event poster utilizing high contrast blue and purple styling for maximum visual impact.',
    tools: ['Photoshop', 'Color Strategy']
  },
  {
    id: 27,
    title: 'Palm Sunday Triumphal Entry',
    designModel: 'Special Service Post',
    category: 'Social Media',
    image: '/images/user_portfolio_23.jpg',
    fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful Palm Sunday graphic featuring cinematic Jesus portraiture and elegant modern typography over a green thematic layout.',
    tools: ['Photoshop', 'Digital Art']
  }
];

const categories = ['All', 'Print Media', 'Social Media'];

const Portfolio = memo(function Portfolio({ limit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(() => {
    const base = selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory);
    return limit ? base.slice(0, limit) : base;
  }, [selectedCategory, limit]);

  const activeIndex = activeItem ? filteredItems.findIndex(item => item.id === activeItem.id) : -1;
  const hasNext = activeIndex >= 0 && activeIndex < filteredItems.length - 1;
  const hasPrev = activeIndex > 0;

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (hasNext) setActiveItem(filteredItems[activeIndex + 1]);
  }, [hasNext, activeIndex, filteredItems]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (hasPrev) setActiveItem(filteredItems[activeIndex - 1]);
  }, [hasPrev, activeIndex, filteredItems]);

  const handleCategoryChange = useCallback((cat) => {
    setSelectedCategory(cat);
  }, []);

  const handleItemOpen = useCallback((item) => {
    setActiveItem(item);
  }, []);

  const handleItemClose = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <section id="portfolio" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <div className="badge">Featured Showcase</div>
          <h2 className="section-title">
            Curated Portfolio <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Showcasing real design models across Event Posters, Festive Banners, 3D Emblem Badges and Brand Identities
          </p>
        </div>

        {/* Category Filters */}
        {!limit && (
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'var(--transition-normal)',
                background: selectedCategory === cat ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : '#FFFFFF',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-main)',
                boxShadow: selectedCategory === cat ? '0 8px 20px rgba(79, 70, 229, 0.3)' : 'var(--shadow-sm)',
                border: selectedCategory === cat ? '1px solid transparent' : '1px solid var(--border-light)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        )}

        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => handleItemOpen(item)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="portfolio-card"
              >
                {/* Image Container with Hover Zoom */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                  background: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    width="400"
                    height="533"
                    loading="lazy"
                    decoding="async"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      borderRadius: '8px'
                    }}
                    className="portfolio-img"
                    onError={(e) => {
                      e.target.src = item.fallback;
                    }}
                  />

                  {/* Dark Glass Overlay on Hover */}
                  <div
                    className="portfolio-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.3) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                      transform: 'scale(0.8)',
                      transition: 'transform 0.3s ease'
                    }} className="view-btn">
                      <Eye size={24} />
                    </div>
                  </div>

                  {/* Category Tag Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.35rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    {item.category}
                  </div>

                  {/* Full Screen Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemOpen(item);
                    }}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      zIndex: 10,
                      transition: 'var(--transition-fast)'
                    }}
                    title="View Full Screen"
                    className="fullscreen-btn"
                  >
                    <Maximize size={18} />
                  </button>
                </div>

                {/* Card Title & Design Model Badge */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.35rem'
                    }}>
                      {item.designModel}
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>

                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: 1.5
                    }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    {item.tools.map((t, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.35rem',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-muted)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Popup */}
        <LightboxModal 
          item={activeItem} 
          onClose={handleItemClose} 
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />

        {/* View All Projects Button (Only on Home Page) */}
        {limit && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
            <Link to="/portfolio" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.08);
        }
        .portfolio-card:hover .portfolio-overlay {
          opacity: 1 !important;
        }
        .portfolio-card:hover .view-btn {
          transform: scale(1) !important;
        }
        .fullscreen-btn:hover {
          color: var(--primary) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
});

export default Portfolio;
