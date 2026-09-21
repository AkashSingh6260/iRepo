/* ============================================================
   src/sections/MiniGame.jsx
   "Catch The Stardust" interactive celestial mini-game
   ============================================================ */

import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, Trophy, RotateCcw } from 'lucide-react';

export default function MiniGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [gameOver, setGameOver] = useState(false);

  const canvasRef = useRef(null);
  const itemsRef = useRef([]);
  const animIdRef = useRef(null);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(25);
    setGameOver(false);
    itemsRef.current = [];
  };

  // Timer countdown
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft <= 0) {
      setIsPlaying(false);
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // Game loop on canvas
  useEffect(() => {
    if (!isPlaying) {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = Math.min(window.innerWidth - 48, 550);
    const height = 360;
    canvas.width = width;
    canvas.height = height;

    const spawnStar = () => {
      return {
        x: Math.random() * (width - 40) + 20,
        y: -20,
        radius: Math.random() * 8 + 14,
        speed: Math.random() * 2 + 1.5,
        color: Math.random() > 0.3 ? '#e5c07b' : '#ffffff',
        caught: false,
      };
    };

    let lastSpawn = Date.now();

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn every 600ms
      if (Date.now() - lastSpawn > 600) {
        itemsRef.current.push(spawnStar());
        lastSpawn = Date.now();
      }

      // Update & Draw
      itemsRef.current.forEach((star, idx) => {
        if (!star.caught) {
          star.y += star.speed;

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'var(--gold-primary)';
          ctx.fill();

          // Star glint
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(star.x - star.radius * 0.3, star.y - star.radius * 0.3, star.radius * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Cleanup offscreen
      itemsRef.current = itemsRef.current.filter(s => s.y < height + 30 && !s.caught);

      animIdRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [isPlaying]);

  const handleCanvasClick = (e) => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clickX = ((e.clientX || e.touches?.[0]?.clientX) - rect.left) * scaleX;
    const clickY = ((e.clientY || e.touches?.[0]?.clientY) - rect.top) * scaleY;

    itemsRef.current.forEach(star => {
      if (!star.caught) {
        const dist = Math.hypot(clickX - star.x, clickY - star.y);
        if (dist < star.radius + 20) {
          star.caught = true;
          setScore(s => s + 1);
        }
      }
    });
  };

  return (
    <section id="game" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <Gamepad2 size={12} color="var(--gold-primary)" />
            <span>CHAPTER 08 &bull; CELESTIAL CATCH</span>
          </div>
          <h2 className="section-title">Catch The Falling Stars</h2>
          <p className="section-subtitle">
            A playful test of quick reflexes. How many falling stars can Madam Jii gather before time runs out?
          </p>
          <div className="gold-divider" />
        </div>

        {/* Game Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '30px 20px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Stats bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '20px',
              fontFamily: 'var(--font-serif-cinematic)',
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
            }}
          >
            <div style={{ color: 'var(--gold-champagne)' }}>
              SCORE: <span style={{ color: '#ffffff', fontWeight: 'bold' }}>{score}</span>
            </div>
            <div style={{ color: 'var(--gold-champagne)' }}>
              TIME LEFT: <span style={{ color: timeLeft < 6 ? '#ff6b6b' : '#ffffff', fontWeight: 'bold' }}>{timeLeft}s</span>
            </div>
          </div>

          {/* Game Canvas / Start Window */}
          {!isPlaying && !gameOver ? (
            <div
              style={{
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(7, 9, 14, 0.7)',
                borderRadius: 'var(--radius-sm)',
                border: '1px dashed var(--gold-border)',
                padding: '24px',
              }}
            >
              <p className="editorial-text" style={{ marginBottom: '24px', color: 'var(--text-platinum)' }}>
                Golden stardust will fall from above. Tap each star to catch it before it disappears into the void.
              </p>
              <button onClick={startGame} className="btn-cinematic">
                Start Game ✦
              </button>
            </div>
          ) : isPlaying ? (
            <canvas
              ref={canvasRef}
              onClick={handleCanvasClick}
              onTouchStart={handleCanvasClick}
              style={{
                width: '100%',
                maxHeight: '360px',
                background: 'rgba(7, 9, 14, 0.9)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gold-border)',
                cursor: 'crosshair',
                touchAction: 'none',
              }}
            />
          ) : (
            <div
              className="animate-dissolve"
              style={{
                padding: '40px 20px',
                background: 'rgba(7, 9, 14, 0.8)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gold-border-bright)',
              }}
            >
              <Trophy size={36} color="var(--gold-primary)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif-cinematic)', fontSize: '1.4rem', color: 'var(--gold-champagne)', marginBottom: '8px' }}>
                You Gathered {score} Stars!
              </h3>
              <p className="editorial-text" style={{ color: 'var(--text-ivory)', marginBottom: '24px' }}>
                {score >= 20
                  ? "Flawless reflexes! Just like you caught every ounce of my admiration. ✨"
                  : score >= 10
                  ? "Impressive! Every star you gathered shines a little brighter tonight. 🌟"
                  : "Every single star matters — just like every quiet moment with you. 💕"}
              </p>
              <button onClick={startGame} className="btn-cinematic">
                <RotateCcw size={16} /> Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
