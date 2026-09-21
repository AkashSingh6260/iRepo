/* ============================================================
   animations.js — Scroll reveals, typewriter, entrance effects
   ============================================================ */

import { prefersReducedMotion, createScrollRevealObserver, wait } from './utils.js';
import { BIRTHDAY_PERSON, HERO_CONFIG, BIRTHDAY_MESSAGE } from './data.js';

/** Initialize all scroll-reveal animations */
export function initScrollReveals() {
  const observer = createScrollRevealObserver();

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

/** 
 * JS-driven typewriter effect (works reliably on all screen sizes).
 */
export function typewriterEffect(element, text, speed = 60) {
  if (prefersReducedMotion()) {
    element.textContent = text;
    element.classList.add('typewriter-done');
    return Promise.resolve();
  }

  return new Promise(resolve => {
    element.textContent = '';
    element.classList.add('typewriter-active');
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typewriter-active');
        element.classList.add('typewriter-done');
        resolve();
      }
    }

    type();
  });
}

/** Staggered fade-in for a collection of elements */
export function staggerReveal(elements, delayBetween = 150) {
  if (prefersReducedMotion()) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  elements.forEach((el, i) => {
    el.style.transitionDelay = `${i * delayBetween}ms`;
  });
}

/** Animate the birthday letter text with a reveal effect */
export function initLetterReveal() {
  const letterSection = document.getElementById('birthday-letter');
  if (!letterSection) return;

  // Hydrate content from data.js
  if (BIRTHDAY_MESSAGE) {
    const titleEl = letterSection.querySelector('.letter-title');
    if (titleEl && BIRTHDAY_MESSAGE.title) titleEl.textContent = BIRTHDAY_MESSAGE.title;

    const paragraphs = letterSection.querySelectorAll('.letter-paragraph:not(.letter-signature)');
    if (paragraphs.length && BIRTHDAY_MESSAGE.paragraphs) {
      paragraphs.forEach((p, idx) => {
        if (BIRTHDAY_MESSAGE.paragraphs[idx]) {
          p.textContent = BIRTHDAY_MESSAGE.paragraphs[idx];
        }
      });
    }

    const signatureEl = letterSection.querySelector('.letter-signature');
    if (signatureEl && BIRTHDAY_MESSAGE.signature) {
      signatureEl.textContent = BIRTHDAY_MESSAGE.signature;
    }
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const paragraphs = letterSection.querySelectorAll('.letter-paragraph');
        paragraphs.forEach((p, i) => {
          setTimeout(() => {
            p.classList.add('revealed');
          }, i * 600);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(letterSection);
}

/** Hero section entrance sequence */
export async function playHeroEntrance() {
  const title = document.getElementById('hero-title');
  const subtitle = document.getElementById('hero-subtitle');
  const hearts = document.getElementById('hero-hearts');
  const cta = document.getElementById('hero-cta');
  const scrollHint = document.getElementById('scroll-indicator');

  if (subtitle && HERO_CONFIG?.subtitle) {
    subtitle.textContent = HERO_CONFIG.subtitle;
  }
  if (cta && HERO_CONFIG?.ctaText) {
    cta.textContent = HERO_CONFIG.ctaText;
  }

  if (!title) return;

  const targetText = HERO_CONFIG?.title || `Happy Birthday, ${BIRTHDAY_PERSON?.name || 'Ishika'} 💕`;

  // Typewriter for the title
  await wait(500);
  await typewriterEffect(title, targetText);

  // Fade in subtitle
  await wait(300);
  if (subtitle) subtitle.classList.add('revealed');

  // Fade in hearts
  await wait(400);
  if (hearts) hearts.classList.add('revealed');

  // Fade in CTA
  await wait(400);
  if (cta) cta.classList.add('revealed');

  // Fade in scroll indicator
  await wait(600);
  if (scrollHint) scrollHint.classList.add('revealed');
}

/** Parallax effect on scroll — uses transform for GPU acceleration */
export function initParallax() {
  if (prefersReducedMotion()) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
          hero.style.setProperty('--scroll-offset', `${scrolled * 0.3}px`);
        }
        ticking = false;
      });
    }
  }, { passive: true });
}
