/* ============================================================
   src/components/Lightbox.jsx
   Fullscreen cinematic photo viewer modal
   ============================================================ */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ photo, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: 'var(--text-pure)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          zIndex: 100,
        }}
        aria-label="Close photo viewer"
      >
        <X size={20} />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(16, 21, 36, 0.8)',
          border: '1px solid var(--gold-border)',
          color: 'var(--gold-champagne)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 100,
          transition: 'all 0.2s ease',
        }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(16, 21, 36, 0.8)',
          border: '1px solid var(--gold-border)',
          color: 'var(--gold-champagne)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 100,
          transition: 'all 0.2s ease',
        }}
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content wrapper */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            border: '1px solid var(--gold-border-bright)',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(229, 192, 123, 0.15)',
            maxHeight: '70vh',
            marginBottom: '20px',
            backgroundColor: '#0a0d14',
          }}
        >
          <img
            src={photo.src}
            alt={photo.title}
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-serif-cinematic)',
            fontSize: '1.4rem',
            color: 'var(--gold-champagne)',
            marginBottom: '6px',
            letterSpacing: '0.08em',
          }}
        >
          {photo.title}
        </h3>

        <p
          className="editorial-text"
          style={{
            maxWidth: '600px',
            color: 'var(--text-ivory)',
            fontSize: '1.15rem',
            lineHeight: 1.5,
          }}
        >
          "{photo.caption}"
        </p>

        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: '8px',
          }}
        >
          {photo.location} &bull; {photo.date}
        </span>
      </div>
    </div>
  );
}
