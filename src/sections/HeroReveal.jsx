/* ============================================================
   src/sections/HeroReveal.jsx
   Grand Cinematic Entrance for Ishika ("Madam Jii")
   ============================================================ */

import React from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { HERO, RECIPIENT } from '../data/content';

export default function HeroReveal() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(26, 15, 29, 0.45) 0%, rgba(7, 9, 14, 0.95) 75%)',
      }}
    >
      <div className="cinematic-container" style={{ maxWidth: '850px' }}>
        {/* Chapter marker */}
        <div className="chapter-badge">
          <Star size={12} fill="var(--gold-primary)" color="var(--gold-primary)" />
          <span>{HERO.chapter} &bull; {HERO.superTitle}</span>
        </div>

        {/* Grand Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif-cinematic)',
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            lineHeight: 1.15,
            letterSpacing: '0.04em',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ffffff 20%, var(--gold-champagne) 65%, var(--gold-primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 10px 40px rgba(0,0,0,0.8)',
          }}
        >
          {HERO.title}
        </h1>

        {/* Subtitle */}
        <p
          className="editorial-text"
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
            color: 'var(--text-platinum)',
            maxWidth: '680px',
            margin: '0 auto 45px',
            lineHeight: 1.6,
          }}
        >
          "{HERO.subtitle}"
        </p>

        {/* Golden line divider with central diamond */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px',
            opacity: 0.6,
          }}
        >
          <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-primary))' }} />
          <div style={{ width: '6px', height: '6px', transform: 'rotate(45deg)', background: 'var(--gold-primary)' }} />
          <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, var(--gold-primary), transparent)' }} />
        </div>

        {/* Creator signature */}
        <div
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold-dim)',
            fontFamily: 'var(--font-serif-cinematic)',
          }}
        >
          Curated by {RECIPIENT.creator} with care &bull; {RECIPIENT.year}
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          opacity: 0.7,
          transition: 'opacity 0.3s ease',
        }}
        onClick={() => {
          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', fontFamily: 'var(--font-sans)' }}>
          {HERO.scrollPrompt}
        </span>
        <ChevronDown size={18} color="var(--gold-primary)" className="float-animation" />
      </div>
    </section>
  );
}
