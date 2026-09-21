/* ============================================================
   particles.js — Floating hearts, sparkles, butterflies
   Canvas-based for performance, respects reduced-motion
   ============================================================ */

import { prefersReducedMotion, randomRange, randomPick } from './utils.js';
import { PARTICLE_EMOJIS } from './data.js';

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }

  reset(initial = false) {
    this.x = randomRange(0, this.canvas.width);
    this.y = initial ? randomRange(0, this.canvas.height) : this.canvas.height + 30;
    this.size = randomRange(14, 26);
    this.emoji = randomPick(PARTICLE_EMOJIS);
    this.speedY = randomRange(-0.4, -1.2);
    this.speedX = randomRange(-0.3, 0.3);
    this.wobbleSpeed = randomRange(0.01, 0.03);
    this.wobbleAmount = randomRange(15, 40);
    this.wobbleOffset = randomRange(0, Math.PI * 2);
    this.opacity = randomRange(0.25, 0.6);
    this.rotation = randomRange(0, Math.PI * 2);
    this.rotationSpeed = randomRange(-0.02, 0.02);
    this.life = 0;
  }

  update() {
    this.life += 1;
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.life * this.wobbleSpeed + this.wobbleOffset) * 0.5;
    this.rotation += this.rotationSpeed;

    // Reset if off screen
    if (this.y < -40 || this.x < -40 || this.x > this.canvas.width + 40) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.font = `${this.size}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.emoji, 0, 0);
    ctx.restore();
  }
}

let animationId = null;
let canvas = null;
let ctx = null;
let particles = [];

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animate() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw(ctx);
  });

  animationId = requestAnimationFrame(animate);
}

export function initParticles() {
  if (prefersReducedMotion()) return;

  // Create canvas
  canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create particles — fewer on mobile for performance
  const count = window.innerWidth < 768 ? 10 : 18;
  particles = Array.from({ length: count }, () => new Particle(canvas));

  animate();
}

/** Create a burst of particles at a specific point (for celebration effects) */
export function burstAt(x, y, count = 8) {
  if (prefersReducedMotion() || !canvas || !ctx) return;

  for (let i = 0; i < count; i++) {
    const p = new Particle(canvas);
    p.x = x;
    p.y = y;
    p.speedY = randomRange(-3, -6);
    p.speedX = randomRange(-3, 3);
    p.opacity = 0.8;
    p.size = randomRange(18, 30);
    particles.push(p);

    // Remove extra particles after they fly off
    setTimeout(() => {
      const idx = particles.indexOf(p);
      if (idx !== -1) particles.splice(idx, 1);
    }, 3000);
  }
}

export function destroyParticles() {
  if (animationId) cancelAnimationFrame(animationId);
  if (canvas) canvas.remove();
  particles = [];
}
