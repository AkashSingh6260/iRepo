/* ============================================================
   src/sections/UnlockedLetters.jsx
   Interactive wax-sealed "Open When..." envelopes
   ============================================================ */

import React, { useState } from 'react';
import { Mail, Check, ChevronDown, Sparkles } from 'lucide-react';
import { LETTERS } from '../data/content';

export default function UnlockedLetters() {
  const [openedLetters, setOpenedLetters] = useState({});
  const [activeLetterId, setActiveLetterId] = useState(null);

  const toggleLetter = (id) => {
    setActiveLetterId(prev => prev === id ? null : id);
    setOpenedLetters(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="letters" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Mail size={12} color="var(--gold-primary)" />
            <span>CHAPTER 04 &bull; SANCTUARY</span>
          </div>
          <h2 className="section-title">Sealed For Your Eyes Only</h2>
          <p className="section-subtitle">
            Letters sealed with wax and intention — to be opened whenever you need them most.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Letters Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {LETTERS.map((letter) => {
            const isOpen = activeLetterId === letter.id;
            const hasBeenOpened = openedLetters[letter.id];

            return (
              <div
                key={letter.id}
                className="envelope-card"
                onClick={() => toggleLetter(letter.id)}
                style={{
                  borderColor: isOpen ? 'var(--gold-border-bright)' : undefined,
                  boxShadow: isOpen ? '0 20px 50px rgba(0,0,0,0.8), 0 0 35px var(--gold-aura)' : undefined,
                }}
              >
                {/* Envelope Top Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div className="wax-seal">
                    {hasBeenOpened ? <Check size={16} color="#ffd9a8" /> : 'M'}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: isOpen ? 'var(--gold-primary)' : 'var(--text-muted)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-serif-cinematic)',
                    }}
                  >
                    <span>{isOpen ? 'Fold Letter' : 'Break Seal'}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Letter Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-cinematic)',
                    fontSize: '1.2rem',
                    color: 'var(--gold-champagne)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {letter.label}
                </h3>

                {/* Preview Teaser */}
                {!isOpen && (
                  <p
                    style={{
                      color: 'var(--text-platinum)',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      lineHeight: 1.5,
                    }}
                  >
                    "{letter.preview}"
                  </p>
                )}

                {/* Expanded Unfolded Letter */}
                {isOpen && (
                  <div
                    style={{
                      marginTop: '20px',
                      padding: '24px',
                      backgroundColor: 'rgba(7, 9, 14, 0.85)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--gold-border)',
                      position: 'relative',
                      animation: 'dissolveIn 0.4s ease forwards',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        opacity: 0.3,
                      }}
                    >
                      <Sparkles size={16} color="var(--gold-primary)" />
                    </div>

                    <p
                      className="editorial-text"
                      style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.8,
                        color: 'var(--text-ivory)',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {letter.content}
                    </p>

                    <div
                      style={{
                        textAlign: 'right',
                        marginTop: '16px',
                        fontFamily: 'var(--font-handwriting)',
                        fontSize: '1.25rem',
                        color: 'var(--gold-primary)',
                      }}
                    >
                      — Always, Akash
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
