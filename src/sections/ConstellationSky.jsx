/* ============================================================
   src/sections/ConstellationSky.jsx
   Interactive Stargazing Night Sky & Constellation Nodes
   ============================================================ */

import React, { useState } from 'react';
import { Moon, Sparkles, Star } from 'lucide-react';
import { CONSTELLATIONS } from '../data/content';

export default function ConstellationSky() {
  const [selectedStar, setSelectedStar] = useState(CONSTELLATIONS[0]);

  return (
    <section id="stargaze" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Moon size={12} color="var(--gold-primary)" />
            <span>CHAPTER 06 &bull; NIGHTFALL</span>
          </div>
          <h2 className="section-title">The Constellation of Us</h2>
          <p className="section-subtitle">
            Touch any glowing star in the night sky to decipher the blessing it carries.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Sky Viewport */}
        <div className="sky-container">
          {/* Subtle background stars canvas */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 150px 180px, #e5c07b, rgba(0,0,0,0)), radial-gradient(1px 1px at 350px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 500px 220px, #f4e4ba, rgba(0,0,0,0))',
              backgroundSize: '550px 550px',
              opacity: 0.6,
            }}
          />

          {/* SVG Constellation lines connecting stars */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <polyline
              points={CONSTELLATIONS.map(s => `${s.x}%,${s.y}%`).join(' ')}
              fill="none"
              stroke="rgba(229, 192, 123, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Interactive Star Nodes */}
          {CONSTELLATIONS.map((star) => {
            const isSelected = selectedStar?.id === star.id;

            return (
              <div
                key={star.id}
                className="star-node"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  zIndex: isSelected ? 20 : 10,
                }}
                onClick={() => setSelectedStar(star)}
              >
                <div
                  className={isSelected ? '' : 'star-twinkle'}
                  style={{
                    width: isSelected ? '14px' : '8px',
                    height: isSelected ? '14px' : '8px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#ffffff' : 'var(--gold-champagne)',
                    boxShadow: isSelected
                      ? '0 0 25px #ffffff, 0 0 50px var(--gold-primary)'
                      : '0 0 15px var(--gold-primary)',
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* Star Title Label */}
                <span
                  style={{
                    position: 'absolute',
                    top: '20px',
                    whiteSpace: 'nowrap',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isSelected ? 'var(--gold-champagne)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-serif-cinematic)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {star.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Star Insight Display */}
        {selectedStar && (
          <div
            className="glass-panel animate-dissolve"
            style={{
              maxWidth: '680px',
              margin: '36px auto 0',
              padding: '28px 36px',
              textAlign: 'center',
              border: '1px solid var(--gold-border-bright)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                fontFamily: 'var(--font-serif-cinematic)',
                marginBottom: '10px',
              }}
            >
              <Sparkles size={14} />
              <span>{selectedStar.name}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif-cinematic)',
                fontSize: '1.4rem',
                color: 'var(--text-pure)',
                marginBottom: '12px',
              }}
            >
              {selectedStar.title}
            </h3>

            <p
              className="editorial-text"
              style={{
                fontSize: '1.15rem',
                color: 'var(--gold-champagne)',
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}
            >
              "{selectedStar.quote}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
