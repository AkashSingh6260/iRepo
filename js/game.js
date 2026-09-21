/* ============================================================
   game.js — "Catch the Hearts" mini-game
   Touch-friendly, 30-second rounds
   ============================================================ */

import { prefersReducedMotion, randomRange } from './utils.js';

let gameCanvas = null;
let gameCtx = null;
let gameActive = false;
let gameScore = 0;
let gameTime = 30;
let gameTimer = null;
let hearts = [];
let animFrameId = null;

const HEART_EMOJIS = ['❤️', '💖', '💕', '💗', '💝', '🌹'];
const GAME_DURATION = 30;

class FallingHeart {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset() {
    this.x = randomRange(30, this.canvasWidth - 30);
    this.y = -30;
    this.size = randomRange(28, 42);
    this.speed = randomRange(1.5, 3.5);
    this.emoji = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    this.wobble = randomRange(0.5, 2);
    this.wobbleOffset = randomRange(0, Math.PI * 2);
    this.caught = false;
    this.missed = false;
    this.catchAnim = 0;
  }

  update(frame) {
    if (this.caught) {
      this.catchAnim += 0.1;
      this.y -= 3;
      if (this.catchAnim > 1) this.reset();
      return;
    }

    this.y += this.speed;
    this.x += Math.sin(frame * 0.02 * this.wobble + this.wobbleOffset) * 0.8;

    if (this.y > this.canvasHeight + 30) {
      this.reset();
    }
  }

  draw(ctx, frame) {
    ctx.save();
    if (this.caught) {
      ctx.globalAlpha = 1 - this.catchAnim;
      ctx.font = `${this.size * (1 + this.catchAnim * 0.5)}px serif`;
    } else {
      ctx.globalAlpha = 0.9;
      ctx.font = `${this.size}px serif`;
    }
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.emoji, this.x, this.y);
    ctx.restore();
  }

  hitTest(px, py) {
    const dist = Math.hypot(px - this.x, py - this.y);
    return dist < this.size;
  }
}

export function initGame() {
  const startBtn = document.getElementById('game-start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', startGame);
  }
}

function startGame() {
  const gameArea = document.getElementById('game-area');
  if (!gameArea) return;

  // Show canvas, hide start
  const startBtn = document.getElementById('game-start-btn');
  if (startBtn) startBtn.style.display = 'none';

  // Create or show canvas
  if (!gameCanvas) {
    gameCanvas = document.createElement('canvas');
    gameCanvas.id = 'game-canvas';
    gameCanvas.className = 'game-canvas';
    gameArea.appendChild(gameCanvas);
  }

  // Size canvas to container
  const rect = gameArea.getBoundingClientRect();
  const width = Math.min(rect.width, 500);
  const height = 400;
  gameCanvas.width = width;
  gameCanvas.height = height;
  gameCanvas.style.display = 'block';
  gameCtx = gameCanvas.getContext('2d');

  // Reset state
  gameScore = 0;
  gameTime = GAME_DURATION;
  gameActive = true;
  hearts = [];

  const heartCount = window.innerWidth < 768 ? 5 : 7;
  for (let i = 0; i < heartCount; i++) {
    const h = new FallingHeart(width, height);
    h.y = randomRange(-200, -30); // stagger start positions
    hearts.push(h);
  }

  // Update score display
  updateGameUI();

  // Click/tap handler
  const clickHandler = (e) => {
    if (!gameActive) return;
    const canvasRect = gameCanvas.getBoundingClientRect();
    const scaleX = gameCanvas.width / canvasRect.width;
    const scaleY = gameCanvas.height / canvasRect.height;

    let px, py;
    if (e.touches) {
      px = (e.touches[0].clientX - canvasRect.left) * scaleX;
      py = (e.touches[0].clientY - canvasRect.top) * scaleY;
    } else {
      px = (e.clientX - canvasRect.left) * scaleX;
      py = (e.clientY - canvasRect.top) * scaleY;
    }

    hearts.forEach(h => {
      if (!h.caught && h.hitTest(px, py)) {
        h.caught = true;
        gameScore++;
        updateGameUI();
      }
    });
  };

  gameCanvas.addEventListener('click', clickHandler);
  gameCanvas.addEventListener('touchstart', clickHandler, { passive: true });

  // Timer
  gameTimer = setInterval(() => {
    gameTime--;
    updateGameUI();
    if (gameTime <= 0) {
      endGame();
    }
  }, 1000);

  // Animation loop
  let frame = 0;
  function gameLoop() {
    if (!gameActive) return;
    frame++;
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    hearts.forEach(h => {
      h.update(frame);
      h.draw(gameCtx, frame);
    });

    animFrameId = requestAnimationFrame(gameLoop);
  }
  gameLoop();
}

function updateGameUI() {
  const scoreEl = document.getElementById('game-score');
  const timeEl = document.getElementById('game-time');
  if (scoreEl) scoreEl.textContent = gameScore;
  if (timeEl) timeEl.textContent = gameTime;
}

function endGame() {
  gameActive = false;
  clearInterval(gameTimer);
  if (animFrameId) cancelAnimationFrame(animFrameId);

  const gameArea = document.getElementById('game-area');
  if (!gameArea) return;

  // Hide canvas
  if (gameCanvas) gameCanvas.style.display = 'none';

  // Show results
  let resultEmoji, resultText;
  if (gameScore >= 20) {
    resultEmoji = '🏆';
    resultText = 'Amazing! You caught so many hearts! Just like you caught mine! 💕';
  } else if (gameScore >= 10) {
    resultEmoji = '🌟';
    resultText = 'Great job! You\'re a natural heart-catcher! 💖';
  } else {
    resultEmoji = '💕';
    resultText = 'Every heart counts! Just like every moment with you! ❤️';
  }

  // Create result card
  const resultDiv = document.createElement('div');
  resultDiv.className = 'game-result revealed';
  resultDiv.innerHTML = `
    <div class="game-result-emoji">${resultEmoji}</div>
    <h3 class="game-result-title">You caught ${gameScore} hearts!</h3>
    <p class="game-result-text">${resultText}</p>
    <button class="game-play-again" aria-label="Play again">Play Again 🎮</button>
  `;
  gameArea.appendChild(resultDiv);

  resultDiv.querySelector('.game-play-again').addEventListener('click', () => {
    resultDiv.remove();
    startGame();
  });
}
