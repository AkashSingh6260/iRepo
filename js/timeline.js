/* ============================================================
   timeline.js — Memory Timeline component
   ============================================================ */

import { TIMELINE } from './data.js';

export function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  // Render items if container is empty or dynamically managed
  container.innerHTML = TIMELINE.map((item, index) => `
    <div class="timeline-item reveal" style="transition-delay: ${(index + 1) * 0.1}s">
      <div class="timeline-dot">${item.icon}</div>
      <div class="timeline-card">
        <span class="timeline-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </div>
  `).join('');
}
