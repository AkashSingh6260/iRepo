/* ============================================================
   quiz.js — Personalized "How Well Do You Know Me?" quiz
   ============================================================ */

import { QUIZ_QUESTIONS, QUIZ_RESULTS } from './data.js';

let currentQuestion = 0;
let score = 0;
let quizContainer = null;

export function initQuiz() {
  quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;

  renderQuestion();
}

function renderQuestion() {
  if (!quizContainer) return;

  if (currentQuestion >= QUIZ_QUESTIONS.length) {
    showResults();
    return;
  }

  const q = QUIZ_QUESTIONS[currentQuestion];

  quizContainer.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar" style="width: ${(currentQuestion / QUIZ_QUESTIONS.length) * 100}%"></div>
    </div>
    <div class="quiz-question-number">Question ${currentQuestion + 1} of ${QUIZ_QUESTIONS.length}</div>
    <h3 class="quiz-question">${q.question}</h3>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}" aria-label="${opt}">
          <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
          <span class="quiz-option-text">${opt}</span>
        </button>
      `).join('')}
    </div>
  `;

  // Animate in
  requestAnimationFrame(() => {
    quizContainer.querySelector('.quiz-question').classList.add('revealed');
    quizContainer.querySelectorAll('.quiz-option').forEach((opt, i) => {
      setTimeout(() => opt.classList.add('revealed'), i * 100);
    });
  });

  // Attach click handlers
  quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
  });
}

function handleAnswer(selectedIndex) {
  const q = QUIZ_QUESTIONS[currentQuestion];
  const options = quizContainer.querySelectorAll('.quiz-option');
  const isCorrect = selectedIndex === q.correct;

  // Disable all buttons
  options.forEach(opt => {
    opt.style.pointerEvents = 'none';
  });

  // Highlight correct / wrong
  options[q.correct].classList.add('correct');
  if (!isCorrect) {
    options[selectedIndex].classList.add('wrong');
  } else {
    score++;
  }

  // Add feedback emoji
  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback';
  feedback.textContent = isCorrect ? '✨ Correct!' : `💕 The answer was "${q.options[q.correct]}"`;
  quizContainer.appendChild(feedback);
  requestAnimationFrame(() => feedback.classList.add('revealed'));

  // Next question after delay
  setTimeout(() => {
    currentQuestion++;
    renderQuestion();
  }, 1800);
}

function showResults() {
  const percentage = score / QUIZ_QUESTIONS.length;
  let message;
  if (percentage === 1) message = QUIZ_RESULTS.perfect;
  else if (percentage >= 0.8) message = QUIZ_RESULTS.great;
  else if (percentage >= 0.6) message = QUIZ_RESULTS.good;
  else message = QUIZ_RESULTS.okay;

  const stars = '⭐'.repeat(score) + '☆'.repeat(QUIZ_QUESTIONS.length - score);

  quizContainer.innerHTML = `
    <div class="quiz-results">
      <div class="quiz-results-emoji">${percentage === 1 ? '🎉' : percentage >= 0.6 ? '🌟' : '💕'}</div>
      <h3 class="quiz-results-title">You scored ${score} out of ${QUIZ_QUESTIONS.length}!</h3>
      <div class="quiz-results-stars">${stars}</div>
      <p class="quiz-results-message">${message}</p>
      <button class="quiz-retry-btn" aria-label="Try again">Try Again 🔄</button>
    </div>
  `;

  requestAnimationFrame(() => {
    quizContainer.querySelector('.quiz-results').classList.add('revealed');
  });

  quizContainer.querySelector('.quiz-retry-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    renderQuestion();
  });
}
