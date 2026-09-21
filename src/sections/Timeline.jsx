/* ============================================================
   src/sections/Timeline.jsx
   Interactive relationship/memory milestone timeline
   ============================================================ */

import React from 'react';
import { Clock, Bookmark } from 'lucide-react';
import { TIMELINE } from '../data/content';

export default function Timeline() {
  return (
    <section id="timeline" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Clock size={12} color="var(--gold-primary)" />
            <span>CHAPTER 03 &bull; CHRONICLES</span>
          </div>
          <h2 className="section-title">The Path That Led Us Here</h2>
          <p className="section-subtitle">
            A journey measured not in hours or days, but in the moments our worlds intertwined.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Timeline Track */}
        <div className="timeline-track">
          {TIMELINE.map((item, index) => (
            <div key={item.number} className="timeline-milestone">
              {/* Central glowing node */}
              <div className="timeline-node" />

              {/* Milestone Content Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '30px',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* Milestone header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    borderBottom: '1px solid var(--gold-border)',
                    paddingBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-cinematic)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.2em',
                      color: 'var(--gold-primary)',
                    }}
                  >
                    {item.phase}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-cinematic)',
                      fontSize: '1rem',
                      color: 'var(--gold-dim)',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-cinematic)',
                    fontSize: '1.25rem',
                    color: 'var(--text-pure)',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-platinum)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    marginBottom: '18px',
                  }}
                >
                  {item.description}
                </p>

                {/* Significance note */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-editorial)',
                    fontStyle: 'italic',
                    color: 'var(--gold-champagne)',
                    background: 'rgba(229, 192, 123, 0.06)',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '2px solid var(--gold-primary)',
                  }}
                >
                  <Bookmark size={12} color="var(--gold-primary)" />
                  <span>{item.significance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
