/* ============================================================
   src/components/AudioPlayer.jsx
   Minimalist floating ambient sound toggle with gold wave bars
   ============================================================ */

import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ isPlaying, toggleAudio }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
      }}
    >
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(16, 21, 36, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--gold-border-bright)',
          color: 'var(--gold-champagne)',
          padding: '10px 18px',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.65)',
          transition: 'all 0.3s ease',
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          fontFamily: 'var(--font-serif-cinematic)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--gold-primary)';
          e.currentTarget.style.boxShadow = '0 0 25px var(--gold-aura)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--gold-border-bright)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.65)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} color="var(--gold-primary)" />
            <span>SOUND ON</span>
            <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '12px' }}>
              {[1, 2, 3].map(bar => (
                <span
                  key={bar}
                  style={{
                    width: '2px',
                    height: bar === 2 ? '12px' : '7px',
                    backgroundColor: 'var(--gold-primary)',
                    borderRadius: '1px',
                    animation: `floatGentle ${0.6 + bar * 0.2}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <VolumeX size={16} color="var(--text-muted)" />
            <span style={{ color: 'var(--text-muted)' }}>SOUND OFF</span>
          </>
        )}
      </button>
    </div>
  );
}
