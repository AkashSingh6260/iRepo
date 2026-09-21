/* ============================================================
   src/sections/SecretCipher.jsx
   Interactive 4-digit Lockbox Keypad & Secret Vault Reveal
   ============================================================ */

import React, { useState } from 'react';
import { Lock, Unlock, KeyRound, Sparkles } from 'lucide-react';
import { SECRET_CIPHER } from '../data/content';

export default function SecretCipher() {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  const handleKeyPress = (num) => {
    if (code.length < 4) {
      setCode(prev => prev + num);
    }
  };

  const handleClear = () => {
    setCode('');
  };

  const handleUnlock = () => {
    if (code === SECRET_CIPHER.passcode) {
      setIsUnlocked(true);
    } else {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
      setCode('');
    }
  };

  return (
    <section id="lockbox" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <KeyRound size={12} color="var(--gold-primary)" />
            <span>CHAPTER 11 &bull; THE VAULT</span>
          </div>
          <h2 className="section-title">The Encrypted Secret</h2>
          <p className="section-subtitle">
            {SECRET_CIPHER.hint}
          </p>
          <div className="gold-divider" />
        </div>

        {/* Lockbox Console */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '520px',
            margin: '0 auto',
            padding: '36px 24px',
            textAlign: 'center',
            border: isUnlocked ? '1px solid var(--gold-border-bright)' : '1px solid var(--gold-border)',
            boxShadow: isUnlocked ? '0 0 50px var(--gold-aura)' : undefined,
          }}
        >
          {!isUnlocked ? (
            <div>
              {/* Lock Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(229, 192, 123, 0.1)',
                  border: '1px solid var(--gold-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <Lock size={22} color="var(--gold-primary)" />
              </div>

              {/* Code Screen Display */}
              <div
                style={{
                  background: 'rgba(5, 7, 12, 0.9)',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-sm)',
                  border: errorShake ? '1px solid #ff453a' : '1px solid var(--gold-border)',
                  maxWidth: '260px',
                  margin: '0 auto 24px',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '14px',
                  transition: 'border-color 0.3s ease',
                }}
              >
                {[0, 1, 2, 3].map(slot => (
                  <span
                    key={slot}
                    style={{
                      fontFamily: 'var(--font-serif-cinematic)',
                      fontSize: '1.6rem',
                      color: code[slot] ? 'var(--gold-primary)' : 'var(--text-muted)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {code[slot] ? '✦' : '—'}
                  </span>
                ))}
              </div>

              {/* Keypad */}
              <div className="keypad-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                  <button key={n} onClick={() => handleKeyPress(n.toString())} className="keypad-btn">
                    {n}
                  </button>
                ))}
                <button onClick={handleClear} className="keypad-btn" style={{ fontSize: '0.85rem' }}>
                  CLR
                </button>
                <button onClick={() => handleKeyPress('0')} className="keypad-btn">
                  0
                </button>
                <button
                  onClick={handleUnlock}
                  className="keypad-btn"
                  style={{
                    background: code.length === 4 ? 'rgba(229, 192, 123, 0.3)' : undefined,
                    borderColor: code.length === 4 ? 'var(--gold-primary)' : undefined,
                    fontSize: '0.85rem',
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-dissolve" style={{ padding: '16px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(229, 192, 123, 0.15)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 30px var(--gold-aura)',
                }}
              >
                <Unlock size={26} color="var(--gold-primary)" />
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif-cinematic)', fontSize: '1.5rem', color: 'var(--gold-champagne)', marginBottom: '18px' }}>
                {SECRET_CIPHER.unlockedTitle}
              </h3>

              <div
                style={{
                  padding: '24px',
                  backgroundColor: 'rgba(7, 9, 14, 0.8)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--gold-border)',
                  textAlign: 'left',
                }}
              >
                <p
                  className="editorial-text"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'var(--text-ivory)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {SECRET_CIPHER.secretMessage}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
