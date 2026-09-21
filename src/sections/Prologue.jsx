/* ============================================================
   src/sections/Prologue.jsx
   The Mysterious Gateway: "Someone made something for you..."
   ============================================================ */

import React, { useState } from 'react';
import { Sparkles, Key } from 'lucide-react';
import { PROLOGUE, RECIPIENT } from '../data/content';

export default function Prologue({ onUnlock }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onUnlock();
    }, 900);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#05070b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: isOpening ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Subtle glowing wax symbol */}
        <div
          className="float-animation"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, rgba(229, 192, 123, 0.25), transparent 70%)',
            border: '1px solid var(--gold-border-bright)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '36px',
            boxShadow: '0 0 35px var(--gold-aura)',
          }}
        >
          <Sparkles size={26} color="var(--gold-primary)" />
        </div>

        {/* Mysterious typewriter-style whisper */}
        <p
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold-dim)',
            fontFamily: 'var(--font-serif-cinematic)',
            marginBottom: '20px',
          }}
        >
          {PROLOGUE.hint}
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
            color: 'var(--text-pure)',
            lineHeight: 1.5,
            fontStyle: 'italic',
            fontWeight: 300,
            marginBottom: '40px',
            maxWidth: '620px',
          }}
        >
          {PROLOGUE.quote}
        </h1>

        <div style={{ width: '40px', height: '1px', background: 'var(--gold-border)', marginBottom: '40px' }} />

        {/* The Action Button */}
        <button
          onClick={handleClick}
          className="btn-cinematic"
          style={{
            padding: '18px 44px',
            fontSize: '0.9rem',
          }}
        >
          <Key size={18} color="var(--gold-primary)" />
          <span>{PROLOGUE.cta}</span>
        </button>

        <span
          style={{
            marginTop: '28px',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
            textTransform: 'uppercase',
          }}
        >
          Sound recommended &bull; Best experienced full screen
        </span>
      </div>
    </div>
  );
}
