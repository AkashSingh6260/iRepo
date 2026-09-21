/* ============================================================
   utils.js — Shared helpers, reduced-motion, scroll utilities
   ============================================================ */

/** Check if user prefers reduced motion */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Random number between min and max */
export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

/** Pick a random item from an array */
export function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Linear interpolation */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/** Clamp a value between min and max */
export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/** Debounce helper */
export function debounce(fn, ms = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/** Throttle using requestAnimationFrame */
export function rafThrottle(fn) {
  let ticking = false;
  return (...args) => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        fn(...args);
        ticking = false;
      });
    }
  };
}

/**
 * Create a reusable IntersectionObserver for scroll-reveal animations.
 * Elements get class `revealed` when they enter the viewport.
 */
export function createScrollRevealObserver(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options;

  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (once) observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });
}

/** Smooth scroll to an element by ID */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** Create a DOM element with attributes and children */
export function createElement(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'className') el.className = value;
    else if (key === 'innerHTML') el.innerHTML = value;
    else if (key === 'textContent') el.textContent = value;
    else if (key.startsWith('on')) el.addEventListener(key.slice(2).toLowerCase(), value);
    else if (key === 'style' && typeof value === 'object') Object.assign(el.style, value);
    else el.setAttribute(key, value);
  }
  children.forEach(child => {
    if (typeof child === 'string') el.appendChild(document.createTextNode(child));
    else if (child) el.appendChild(child);
  });
  return el;
}

/** Wait for ms milliseconds */
export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Simple easing function — ease-out cubic */
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
