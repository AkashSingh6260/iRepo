/* ============================================================
   src/components/Navbar.jsx
   Minimalist floating chapter navigation
   ============================================================ */

import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Prologue' },
  { id: 'gallery', label: 'Memories' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'letters', label: 'Letters' },
  { id: 'never-said', label: 'Secrets' },
  { id: 'stargaze', label: 'Constellations' },
  { id: 'cake', label: 'The Wish' },
  { id: 'quiz', label: 'Trivia' },
  { id: 'lockbox', label: 'The Vault' },
  { id: 'finale', label: 'Celebration' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);

      const sectionEls = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (sectionEls[i].offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isScrolled) return null;

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 900,
        background: 'rgba(11, 14, 23, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--gold-border)',
        borderRadius: 'var(--radius-full)',
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.75)',
        animation: 'dissolveIn 0.5s ease forwards',
        maxWidth: '92vw',
        overflowX: 'auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingRight: '8px', borderRight: '1px solid var(--gold-border)' }}>
        <Compass size={14} color="var(--gold-primary)" />
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontFamily: 'var(--font-serif-cinematic)', color: 'var(--gold-primary)' }}>
          JOURNEY
        </span>
      </div>

      <div style={{ display: 'flex', gap: '4px', whiteSpace: 'nowrap' }}>
        {SECTIONS.map(sec => (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            style={{
              background: activeSection === sec.id ? 'rgba(229, 192, 123, 0.15)' : 'transparent',
              border: activeSection === sec.id ? '1px solid var(--gold-border-bright)' : '1px solid transparent',
              color: activeSection === sec.id ? 'var(--gold-champagne)' : 'var(--text-muted)',
              borderRadius: 'var(--radius-full)',
              padding: '4px 12px',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-sans)',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
