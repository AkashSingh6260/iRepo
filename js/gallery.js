/* ============================================================
   gallery.js — Premium gallery with fullscreen lightbox
   ============================================================ */

import { PHOTOS } from './data.js';
import { burstAt } from './particles.js';

let currentLightboxIndex = 0;
let lightboxEl = null;

/** Initialize gallery interactions */
export function initGallery() {
  renderGallery();
  createLightbox();
  attachGalleryEvents();
}

/** Render photos dynamically from PHOTOS data */
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = PHOTOS.map((photo, index) => `
    <div class="photo-card reveal" style="transition-delay: ${(index + 1) * 0.1}s">
      <div class="photo-container" data-index="${index}">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
        <div class="photo-overlay">
          <div class="photo-caption">${photo.caption}</div>
          <button class="like-btn" aria-label="Like this photo">
            <span class="heart-icon">🤍</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/** Attach click & like handlers */
function attachGalleryEvents() {
  document.querySelectorAll('.photo-card').forEach((card, index) => {
    const container = card.querySelector('.photo-container');
    if (container) {
      container.style.cursor = 'pointer';
      container.addEventListener('click', (e) => {
        // Prevent lightbox if like button was clicked
        if (e.target.closest('.like-btn')) return;
        openLightbox(index);
      });
    }

    // Like button
    const likeBtn = card.querySelector('.like-btn');
    if (likeBtn) {
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike(likeBtn, e);
      });
    }
  });
}

/** Create the lightbox DOM structure */
function createLightbox() {
  if (document.getElementById('lightbox')) {
    lightboxEl = document.getElementById('lightbox');
    return;
  }

  lightboxEl = document.createElement('div');
  lightboxEl.id = 'lightbox';
  lightboxEl.className = 'lightbox';
  lightboxEl.setAttribute('role', 'dialog');
  lightboxEl.setAttribute('aria-label', 'Photo viewer');
  lightboxEl.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-prev" aria-label="Previous photo">&#8249;</button>
    <button class="lightbox-next" aria-label="Next photo">&#8250;</button>
    <div class="lightbox-content">
      <img class="lightbox-img" src="" alt="" />
      <div class="lightbox-caption"></div>
    </div>
    <div class="lightbox-counter"></div>
  `;

  document.body.appendChild(lightboxEl);

  // Event listeners
  lightboxEl.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightboxEl.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
  lightboxEl.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
  lightboxEl.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxEl.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Swipe support for mobile
  let touchStartX = 0;
  lightboxEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightboxEl.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) {
      navigateLightbox(diff > 0 ? -1 : 1);
    }
  }, { passive: true });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  lightboxEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxEl.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + PHOTOS.length) % PHOTOS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const photo = PHOTOS[currentLightboxIndex];
  if (!photo) return;
  const img = lightboxEl.querySelector('.lightbox-img');
  const caption = lightboxEl.querySelector('.lightbox-caption');
  const counter = lightboxEl.querySelector('.lightbox-counter');

  img.src = photo.src;
  img.alt = photo.alt;
  caption.textContent = photo.caption;
  counter.textContent = `${currentLightboxIndex + 1} / ${PHOTOS.length}`;
}

/** Toggle like with heart burst effect */
function toggleLike(button, event) {
  const heartIcon = button.querySelector('.heart-icon');
  button.classList.toggle('liked');

  if (button.classList.contains('liked')) {
    heartIcon.textContent = '❤️';

    // Heart burst effect
    const x = event.clientX || window.innerWidth / 2;
    const y = event.clientY || window.innerHeight / 2;
    burstAt(x, y, 6);

    // Scale pop animation
    button.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.4)' },
      { transform: 'scale(1)' },
    ], { duration: 400, easing: 'ease-out' });
  } else {
    heartIcon.textContent = '🤍';
  }
}
