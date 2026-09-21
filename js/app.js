/* ============================================================
   app.js — Main Application Orchestrator
   ============================================================
   Imports modular components and initializes the entire experience.
   Each section is fully self-contained and configurable via data.js!
   ============================================================ */

import { initParticles } from './particles.js';
import { initScrollReveals, playHeroEntrance, initParallax, initLetterReveal } from './animations.js';
import { initGallery } from './gallery.js';
import { initLoveSection } from './love.js';
import { initTimeline } from './timeline.js';
import { initLetters } from './letters.js';
import { initQuiz } from './quiz.js';
import { initGame } from './game.js';
import { initMusicPlayer } from './music.js';
import { initSecretMessage, initCelebrationButton, initFinalSurprise } from './surprises.js';
import { scrollToId } from './utils.js';

/* ── App Initialization ── */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Core visual foundation & effects
  initParticles();
  initParallax();

  // 2. Render & initialize dynamic components from data.js
  initGallery();
  initLoveSection();
  initTimeline();
  initLetters();
  initQuiz();
  initGame();

  // 3. Surprises, interactions & music
  initMusicPlayer();
  initSecretMessage();
  initCelebrationButton();
  initFinalSurprise();

  // 4. Initialize scroll reveal observers for all rendered elements
  initScrollReveals();
  initLetterReveal();

  // 5. Hero entrance sequence
  playHeroEntrance();

  // 6. Navigation dots and CTA listeners
  initNavDots();
  initHeroCTA();
});

/** Hook up CTA smooth scroll */
function initHeroCTA() {
  const ctaBtn = document.getElementById('hero-cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      scrollToId('gallery');
    });
  }
}

/** Track which section is active for navigation dots */
function initNavDots() {
  const sections = document.querySelectorAll('section[id]');
  const dots = document.querySelectorAll('.nav-dot');

  if (!dots.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dots.forEach(dot => dot.classList.remove('active'));
        const activeDot = document.querySelector(`.nav-dot[data-section="${entry.target.id}"]`);
        if (activeDot) activeDot.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}
