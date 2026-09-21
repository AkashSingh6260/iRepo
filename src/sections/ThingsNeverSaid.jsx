/* ============================================================
   src/sections/ThingsNeverSaid.jsx
   Intimate "Things I Never Said" 3D flip confession cards
   ============================================================ */

import React, { useState } from 'react';
import { Eye, RotateCw } from 'lucide-react';
import { THINGS_NEVER_SAID } from '../data/content';

export default function ThingsNeverSaid() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="never-said" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Eye size={12} color="var(--gold-primary)" />
            <span>CHAPTER 05 &bull; CONFESSIONS</span>
          </div>
          <h2 className="section-title">Things I Never Said Out Loud</h2>
          <p className="section-subtitle">
            Quiet observations and honest thoughts that usually stay unspoken. Tap any card to flip.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            perspective: '1200px',
          }}
        >
          {THINGS_NEVER_SAID.map((card, index) => {
            const isFlipped = flippedCards[index];

            return (
              <div
                key={index}
                className="flip-card"
                onClick={() => toggleFlip(index)}
                style={{
                  height: '240px',
                  cursor: 'pointer',
                }}
              >
                <div
                  className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="flip-card-front glass-panel"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--gold-border)',
                      background: 'linear-gradient(135deg, rgba(16, 21, 36, 0.9) 0%, rgba(26, 15, 29, 0.7) 100%)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-primary)',
                          fontFamily: 'var(--font-serif-cinematic)',
                        }}
                      >
                        {card.tag}
                      </span>
                      <RotateCw size={14} color="var(--text-muted)" />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif-cinematic)',
                        fontSize: '1.25rem',
                        color: 'var(--text-pure)',
                        lineHeight: 1.4,
                      }}
                    >
                      "{card.front}"
                    </h3>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-dim)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      Tap to reveal truth &rarr;
                    </span>
                  </div>

                  {/* Back Side */}
                  <div
                    className="flip-card-back glass-panel"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--gold-border-bright)',
                      background: 'linear-gradient(135deg, rgba(26, 15, 29, 0.95) 0%, rgba(16, 21, 36, 0.95) 100%)',
                      boxShadow: '0 0 30px var(--gold-aura)',
                    }}
                  >
                    <p
                      className="editorial-text"
                      style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.6,
                        color: 'var(--gold-champagne)',
                        fontStyle: 'italic',
                      }}
                    >
                      "{card.back}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
