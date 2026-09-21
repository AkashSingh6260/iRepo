/* ============================================================
   src/sections/PolaroidGallery.jsx
   Vintage realistic polaroids with tilt physics & lightbox
   ============================================================ */

import React, { useState } from 'react';
import { Camera, Heart, Maximize2 } from 'lucide-react';
import { PHOTOS } from '../data/content';
import Lightbox from '../components/Lightbox';

export default function PolaroidGallery() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [likes, setLikes] = useState({});

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNext = () => {
    const currentIndex = PHOTOS.findIndex(p => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % PHOTOS.length;
    setActivePhoto(PHOTOS[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = PHOTOS.findIndex(p => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
    setActivePhoto(PHOTOS[prevIndex]);
  };

  return (
    <section id="gallery" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Camera size={12} color="var(--gold-primary)" />
            <span>CHAPTER 02 &bull; MEMORIES</span>
          </div>
          <h2 className="section-title">Frozen Moments in Time</h2>
          <p className="section-subtitle">
            Every snapshot holds a quiet story that belongs only to the two of us.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Polaroids Grid */}
        <div className="polaroid-grid">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="polaroid-card"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
              }}
              onClick={() => setActivePhoto(photo)}
            >
              {/* Tape or pin detail */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '55px',
                  height: '18px',
                  background: 'rgba(255, 255, 255, 0.45)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(2px)',
                  transformOrigin: 'center',
                }}
              />

              {/* Photo viewport */}
              <div className="polaroid-img-wrapper">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="polaroid-img"
                  loading="lazy"
                />
              </div>

              {/* Handwritten caption */}
              <div className="polaroid-caption">
                {photo.caption}
              </div>

              {/* Metadata & Controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '12px',
                  paddingTop: '8px',
                  borderTop: '1px dashed #dcd5ca',
                }}
              >
                <span className="polaroid-meta" style={{ textAlign: 'left' }}>
                  {photo.date}
                </span>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    onClick={(e) => toggleLike(e, photo.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      color: likes[photo.id] ? '#d93856' : '#948a80',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                      transform: likes[photo.id] ? 'scale(1.2)' : 'scale(1)',
                    }}
                    aria-label="Save to favorites"
                  >
                    <Heart size={16} fill={likes[photo.id] ? '#d93856' : 'none'} />
                  </button>

                  <div style={{ color: '#948a80' }}>
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <Lightbox
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
