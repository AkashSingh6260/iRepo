/* ============================================================
   surprises.js — Secret message, confetti, celebration effects
   ============================================================ */

import { SECRET_MESSAGE, FINALE_CONFIG } from './data.js';
import { prefersReducedMotion, randomRange } from './utils.js';

/* ── Secret Message (5-tap reveal) ── */
let tapCount = 0;
let tapTimer = null;

export function initSecretMessage() {
  const secretSection = document.getElementById('secret-section');
  if (!secretSection) return;

  // Hydrate content from data.js
  const hintEl = secretSection.querySelector('.secret-hint');
  const titleEl = secretSection.querySelector('.secret-title');
  const textEl = secretSection.querySelector('.secret-text');

  if (hintEl && SECRET_MESSAGE.hint) hintEl.textContent = SECRET_MESSAGE.hint;
  if (titleEl && SECRET_MESSAGE.title) titleEl.textContent = SECRET_MESSAGE.title;
  if (textEl && SECRET_MESSAGE.content) textEl.textContent = SECRET_MESSAGE.content;

  const trigger = secretSection.querySelector('.secret-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', () => {
    tapCount++;
    clearTimeout(tapTimer);

    // Reset tap count after 2.5 seconds of inactivity
    tapTimer = setTimeout(() => {
      tapCount = 0;
      const progress = trigger.querySelector('.secret-progress');
      if (progress) progress.style.width = '0%';
    }, 2500);

    // Show progress
    const progress = trigger.querySelector('.secret-progress');
    if (progress) {
      progress.style.width = `${(tapCount / 5) * 100}%`;
    }

    if (tapCount >= 5) {
      revealSecret(secretSection);
      tapCount = 0;
    }
  });
}

function revealSecret(section) {
  const hidden = section.querySelector('.secret-hidden');
  const trigger = section.querySelector('.secret-trigger');

  if (hidden && trigger) {
    trigger.style.display = 'none';
    hidden.classList.add('revealed');
    hidden.style.display = 'block';

    // Mini confetti burst
    launchConfetti(40);
  }
}

/* ── Celebration Button Effect ── */
export function initCelebrationButton() {
  const ctaBtn = document.getElementById('hero-cta');
  if (!ctaBtn) return;

  ctaBtn.addEventListener('click', () => {
    // Burst of confetti from button
    const rect = ctaBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createCelebrationBurst(x, y);
  });
}

function createCelebrationBurst(x, y) {
  if (prefersReducedMotion()) return;

  const emojis = ['🎉', '🎊', '✨', '💖', '🌟', '💕', '🎈', '🎀'];
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: ${randomRange(16, 30)}px;
      pointer-events: none;
      z-index: 10000;
    `;
    document.body.appendChild(particle);

    const angle = randomRange(0, Math.PI * 2);
    const velocity = randomRange(100, 300);
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 100;

    particle.animate([
      { transform: 'translate(0, 0) scale(0)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(1.2)`, opacity: 1, offset: 0.3 },
      { transform: `translate(${vx * 1.5}px, ${vy + 200}px) scale(0.5)`, opacity: 0 },
    ], {
      duration: randomRange(1000, 1800),
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }).onfinish = () => particle.remove();
  }
}

/* ── Final Surprise Confetti ── */
export function initFinalSurprise() {
  const surpriseBtn = document.getElementById('final-surprise-btn');
  if (!surpriseBtn) return;

  if (FINALE_CONFIG && FINALE_CONFIG.buttonText) {
    surpriseBtn.textContent = FINALE_CONFIG.buttonText;
  }

  const titleEl = document.querySelector('.finale-title');
  const textEl = document.querySelector('.finale-text');
  if (titleEl && FINALE_CONFIG.title) titleEl.textContent = FINALE_CONFIG.title;
  if (textEl && FINALE_CONFIG.text) textEl.textContent = FINALE_CONFIG.text;

  surpriseBtn.addEventListener('click', () => {
    surpriseBtn.style.display = 'none';
    const message = document.getElementById('final-message');
    if (message) {
      message.classList.add('revealed');
      message.style.display = 'block';
    }

    launchConfetti(120);

    // Keep adding small bursts
    let burstCount = 0;
    const burstInterval = setInterval(() => {
      launchConfetti(20);
      burstCount++;
      if (burstCount >= 5) clearInterval(burstInterval);
    }, 1500);
  });
}

/** Launch confetti particles across the screen */
export function launchConfetti(count = 80) {
  if (prefersReducedMotion()) return;

  const colors = ['#ff6b9d', '#c084fc', '#fb7185', '#f472b6', '#a78bfa', '#fbbf24', '#34d399', '#60a5fa'];
  const emojis = ['🎉', '🎊', '✨', '💖', '💕', '🌟', '❤️', '🎈', '🎀', '💝'];

  for (let i = 0; i < count; i++) {
    const isEmoji = Math.random() > 0.5;
    const particle = document.createElement('div');

    if (isEmoji) {
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      particle.style.fontSize = randomRange(14, 28) + 'px';
    } else {
      particle.style.width = randomRange(6, 12) + 'px';
      particle.style.height = randomRange(6, 12) + 'px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    }

    particle.style.cssText += `
      position: fixed;
      left: ${randomRange(0, window.innerWidth)}px;
      top: -20px;
      pointer-events: none;
      z-index: 10000;
    `;

    document.body.appendChild(particle);

    const swayX = randomRange(-100, 100);
    const duration = randomRange(2000, 4000);
    const delay = randomRange(0, 1000);

    particle.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${swayX * 0.5}px, ${window.innerHeight * 0.4}px) rotate(${randomRange(-180, 180)}deg)`, opacity: 1, offset: 0.5 },
      { transform: `translate(${swayX}px, ${window.innerHeight + 30}px) rotate(${randomRange(-360, 360)}deg)`, opacity: 0.5 },
    ], {
      duration,
      delay,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }).onfinish = () => particle.remove();
  }
}
