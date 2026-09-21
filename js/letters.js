/* ============================================================
   letters.js — Interactive "Open When..." letters component
   ============================================================ */

import { LETTERS } from './data.js';

export function initLetters() {
  renderLetters();
  attachLetterEvents();
}

function renderLetters() {
  const container = document.getElementById('letters-grid');
  if (!container) return;

  container.innerHTML = LETTERS.map((letter, index) => `
    <div class="envelope reveal" style="transition-delay: ${(index + 1) * 0.05}s" tabindex="0" role="button" aria-expanded="false">
      <div class="envelope-front">
        <div class="envelope-seal" style="background: ${letter.color}26">${letter.icon || '💌'}</div>
        <div>
          <div class="envelope-label">${letter.label}</div>
          <div class="envelope-hint">Tap to read</div>
        </div>
        <span class="envelope-arrow">▼</span>
      </div>
      <div class="letter-content">
        <div class="letter-content-inner">
          ${letter.content}
        </div>
      </div>
    </div>
  `).join('');
}

function attachLetterEvents() {
  document.querySelectorAll('.envelope').forEach(envelope => {
    envelope.addEventListener('click', () => {
      toggleEnvelope(envelope);
    });

    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleEnvelope(envelope);
      }
    });
  });
}

function toggleEnvelope(envelope) {
  const isOpen = envelope.classList.contains('open');

  // Close all other envelopes first
  document.querySelectorAll('.envelope.open').forEach(env => {
    if (env !== envelope) {
      env.classList.remove('open');
      env.setAttribute('aria-expanded', 'false');
    }
  });

  if (isOpen) {
    envelope.classList.remove('open');
    envelope.setAttribute('aria-expanded', 'false');
  } else {
    envelope.classList.add('open');
    envelope.setAttribute('aria-expanded', 'true');

    // Scroll the letter content into view smoothly
    setTimeout(() => {
      const content = envelope.querySelector('.letter-content');
      if (content) {
        content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 400);
  }
}
