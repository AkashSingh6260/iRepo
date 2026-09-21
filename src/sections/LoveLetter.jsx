/* ============================================================
   src/sections/LoveLetter.jsx
   Cinematic parchment birthday letter from Akash
   ============================================================ */

import React from 'react';
import { Feather, Heart } from 'lucide-react';
import { BIRTHDAY_LETTER } from '../data/content';

export default function LoveLetter() {
  return (
    <section id="letter" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Feather size={12} color="var(--gold-primary)" />
            <span>CHAPTER 10 &bull; THE LETTER</span>
          </div>
          <h2 className="section-title">An Open Heart on Paper</h2>
          <p className="section-subtitle">
            Words written without hesitation, kept safe for your birthday.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Parchment Document Frame */}
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            background: 'linear-gradient(145deg, #18131e 0%, #0d101b 100%)',
            border: '1px solid var(--gold-border-bright)',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.9), 0 0 45px var(--gold-aura)',
            padding: 'clamp(32px, 6vw, 60px)',
            position: 'relative',
          }}
        >
          {/* Subtle corner flourish */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '24px',
              height: '24px',
              borderTop: '2px solid var(--gold-primary)',
              borderLeft: '2px solid var(--gold-primary)',
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '24px',
              height: '24px',
              borderBottom: '2px solid var(--gold-primary)',
              borderRight: '2px solid var(--gold-primary)',
              opacity: 0.5,
            }}
          />

          {/* Letter Heading */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gold-dim)',
                fontFamily: 'var(--font-serif-cinematic)',
              }}
            >
              {BIRTHDAY_LETTER.date}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif-cinematic)',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                color: 'var(--gold-champagne)',
                marginTop: '8px',
                letterSpacing: '0.04em',
              }}
            >
              {BIRTHDAY_LETTER.heading}
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {BIRTHDAY_LETTER.body.map((para, i) => (
              <p
                key={i}
                className="editorial-text"
                style={{
                  fontSize: 'clamp(1.08rem, 1.8vw, 1.25rem)',
                  lineHeight: 1.85,
                  color: 'var(--text-ivory)',
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Signature Block */}
          <div
            style={{
              marginTop: '45px',
              paddingTop: '24px',
              borderTop: '1px solid var(--gold-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <span style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              {BIRTHDAY_LETTER.signature}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '2.4rem',
                color: 'var(--gold-primary)',
                lineHeight: 1.2,
                marginTop: '4px',
              }}
            >
              {BIRTHDAY_LETTER.sender}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
