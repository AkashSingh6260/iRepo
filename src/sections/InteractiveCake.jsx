/* ============================================================
   src/sections/InteractiveCake.jsx
   Minimalist luxury birthday cake with interactive candle
   ============================================================ */

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Wind, Sparkles } from 'lucide-react';
import { CAKE_DATA } from '../data/content';

export default function InteractiveCake() {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);

  const handleBlowOut = () => {
    if (isBlownOut) return;
    setIsBlownOut(true);
    setShowSmoke(true);

    // Warm golden stardust confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#e5c07b', '#f4e4ba', '#ffffff', '#d4af37'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      setShowSmoke(false);
    }, 2800);
  };

  const handleRelight = () => {
    setIsBlownOut(false);
    setShowSmoke(false);
  };

  return (
    <section id="cake" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Flame size={12} color="var(--gold-primary)" />
            <span>CHAPTER 07 &bull; THE WISH</span>
          </div>
          <h2 className="section-title">{CAKE_DATA.title}</h2>
          <p className="section-subtitle">
            {isBlownOut
              ? 'A silent wish carried up by the smoke...'
              : CAKE_DATA.instruction}
          </p>
          <div className="gold-divider" />
        </div>

        {/* Minimalist Luxury Cake & Candle Artwork */}
        <div className="cake-container">
          {/* Interactive Candle */}
          <div
            className="candle-wrapper"
            onClick={!isBlownOut ? handleBlowOut : handleRelight}
            title={!isBlownOut ? 'Click flame to blow out' : 'Click wick to relight'}
          >
            {/* The Flame */}
            {!isBlownOut && (
              <div className="candle-flame">
                <div className="candle-flame-body" />
              </div>
            )}

            {/* Rising smoke effect after blowing */}
            {showSmoke && (
              <div
                className="candle-smoke"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.5)',
                  filter: 'blur(3px)',
                  margin: '0 auto -6px',
                }}
              />
            )}

            {/* Wick */}
            <div className="candle-wick" />

            {/* Candle stick */}
            <div className="candle-stick" />
          </div>

          {/* Luxury 2-Tier Architectural Cake */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Tier */}
            <div
              style={{
                width: '140px',
                height: '50px',
                background: 'linear-gradient(180deg, #1c1524 0%, #121624 100%)',
                border: '1px solid var(--gold-border-bright)',
                borderRadius: '6px 6px 0 0',
                boxShadow: isBlownOut ? 'none' : '0 0 30px rgba(255, 168, 60, 0.2)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '10px',
                  right: '10px',
                  height: '1px',
                  borderTop: '1px dashed var(--gold-border)',
                }}
              />
            </div>

            {/* Bottom Tier */}
            <div
              style={{
                width: '220px',
                height: '70px',
                background: 'linear-gradient(180deg, #161220 0%, #0c0f18 100%)',
                border: '1px solid var(--gold-border)',
                borderTop: 'none',
                borderRadius: '4px 4px 0 0',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '16px',
                  right: '16px',
                  height: '1px',
                  borderTop: '1px dashed var(--gold-border)',
                }}
              />
            </div>

            {/* Gold Serving Pedestal */}
            <div
              style={{
                width: '270px',
                height: '12px',
                background: 'linear-gradient(90deg, #b39255, #f4e4ba, #b39255)',
                borderRadius: '6px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.8), 0 0 20px var(--gold-aura)',
              }}
            />
          </div>

          {/* Wish Granted Notification */}
          {isBlownOut && (
            <div
              className="glass-panel animate-dissolve"
              style={{
                marginTop: '45px',
                maxWidth: '620px',
                padding: '24px 32px',
                textAlign: 'center',
                borderColor: 'var(--gold-border-bright)',
                boxShadow: '0 0 35px var(--gold-aura)',
              }}
            >
              <Sparkles size={20} color="var(--gold-primary)" style={{ marginBottom: '12px' }} />
              <p className="editorial-text" style={{ fontSize: '1.25rem', color: 'var(--gold-champagne)', marginBottom: '16px' }}>
                "{CAKE_DATA.wishGrantedText}"
              </p>

              <button
                onClick={handleRelight}
                style={{
                  background: 'none',
                  border: '1px solid var(--gold-border)',
                  color: 'var(--gold-primary)',
                  padding: '6px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  fontFamily: 'var(--font-serif-cinematic)',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                Relight The Flame
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
