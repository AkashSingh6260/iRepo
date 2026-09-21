/* ============================================================
   love.js — "Things I Love About You" component
   ============================================================ */

import { LOVE_ITEMS } from './data.js';

export function initLoveSection() {
  const container = document.getElementById('love-grid');
  if (!container) return;

  container.innerHTML = LOVE_ITEMS.map((item, index) => `
    <div class="love-card reveal" style="transition-delay: ${(index + 1) * 0.05}s">
      <span class="love-icon">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join('');
}
