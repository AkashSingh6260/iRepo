/* ============================================================
   src/sections/GrandFinale.jsx
   Champagne & Golden Stardust Grand Finale Celebration
   ============================================================ */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { RECIPIENT } from '../data/content';

export default function GrandFinale() {
  const [celebrated, setCelebrated] = useState(false);

  const launchCelebration = () => {
    setCelebrated(true);

    const end = Date.now() + 3.5 * 1000;
    const colors = ['#e5c07b', '#f4e4ba', '#ffffff', '#d4af37', '#992233'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section
      id="finale"
      className="section-spacing"
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26, 15, 29, 0.55) 0%, rgba(5, 7, 11, 0.95) 80%)',
      }}
    >
      <div className="cinematic-container" style={{ maxWidth: '820px' }}>
        <div className="chapter-badge">
          <Sparkles size={12} color="var(--gold-primary)" />
          <span>CHAPTER 12 &bull; THE GRAND REVEAL</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif-cinematic)',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            lineHeight: 1.15,
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 10%, var(--gold-champagne) 60%, var(--gold-primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Happy Birthday, {RECIPIENT.nickname}
        </h2>

        <p
          className="editorial-text"
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
            color: 'var(--text-ivory)',
            maxWidth: '680px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          You are the poetry written between the lines of my everyday life. May this new year bring you everything your generous heart has ever dreamed of.
        </p>

        {/* Celebration Trigger */}
        <div style={{ marginBottom: '60px' }}>
          <button
            onClick={launchCelebration}
            className="btn-cinematic"
            style={{
              padding: '20px 48px',
              fontSize: '0.95rem',
            }}
          >
            <Sparkles size={18} color="var(--gold-primary)" />
            <span>Celebrate The Queen 🥂</span>
          </button>
        </div>

        {/* Closing Signature Footer */}
        <footer
          style={{
            paddingTop: '40px',
            borderTop: '1px solid var(--gold-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <span>Created by {RECIPIENT.creator} for {RECIPIENT.name}</span>
            <span>&bull;</span>
            <span>{RECIPIENT.year}</span>
          </div>

          <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1.8rem', color: 'var(--gold-primary)' }}>
            Forever & Always &bull; {RECIPIENT.creator} ❤️
          </p>
        </footer>
      </div>
    </section>
  );
}
