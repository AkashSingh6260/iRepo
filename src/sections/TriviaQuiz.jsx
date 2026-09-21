/* ============================================================
   src/sections/TriviaQuiz.jsx
   Personalized interactive trivia quiz with reflection insights
   ============================================================ */

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/content';

export default function TriviaQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelect = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);

    if (idx === currentQ.correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex(c => c + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="section-spacing">
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="chapter-badge">
            <HelpCircle size={12} color="var(--gold-primary)" />
            <span>CHAPTER 09 &bull; RETROSPECTIVE</span>
          </div>
          <h2 className="section-title">The Quiz of Our Lore</h2>
          <p className="section-subtitle">
            A few tailored questions to test our shared memories and understanding.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Quiz Container */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '36px',
            borderRadius: 'var(--radius-md)',
          }}
        >
          {!quizFinished ? (
            <div>
              {/* Progress counter */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  fontFamily: 'var(--font-serif-cinematic)',
                  color: 'var(--gold-dim)',
                  marginBottom: '16px',
                }}
              >
                <span>QUESTION {currentIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
                <span>SCORE: {score}</span>
              </div>

              {/* Question */}
              <h3
                style={{
                  fontFamily: 'var(--font-serif-cinematic)',
                  fontSize: '1.35rem',
                  color: 'var(--text-pure)',
                  marginBottom: '28px',
                  lineHeight: 1.4,
                }}
              >
                {currentQ.question}
              </h3>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {currentQ.options.map((opt, i) => {
                  let btnBg = 'rgba(22, 29, 48, 0.6)';
                  let btnBorder = 'var(--gold-border)';
                  let textColor = 'var(--text-ivory)';

                  if (selectedOption !== null) {
                    if (i === currentQ.correct) {
                      btnBg = 'rgba(52, 199, 89, 0.15)';
                      btnBorder = '#34c759';
                      textColor = '#a6f4c5';
                    } else if (i === selectedOption) {
                      btnBg = 'rgba(255, 69, 58, 0.15)';
                      btnBorder = '#ff453a';
                      textColor = '#ff9994';
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-sm)',
                        background: btnBg,
                        border: `1px solid ${btnBorder}`,
                        color: textColor,
                        textAlign: 'left',
                        cursor: selectedOption === null ? 'pointer' : 'default',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && i === currentQ.correct && (
                        <CheckCircle2 size={18} color="#34c759" />
                      )}
                      {selectedOption === i && i !== currentQ.correct && (
                        <XCircle size={18} color="#ff453a" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Reflection note after answering */}
              {selectedOption !== null && (
                <div
                  className="animate-dissolve"
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(229, 192, 123, 0.08)',
                    border: '1px solid var(--gold-border-bright)',
                    marginBottom: '20px',
                  }}
                >
                  <p className="editorial-text" style={{ fontSize: '1.05rem', color: 'var(--gold-champagne)', fontStyle: 'italic' }}>
                    "{currentQ.reflection}"
                  </p>
                </div>
              )}

              {/* Next Question button */}
              {selectedOption !== null && (
                <button
                  onClick={handleNext}
                  className="btn-cinematic"
                  style={{ width: '100%', padding: '14px 0' }}
                >
                  {currentIndex + 1 < QUIZ_QUESTIONS.length ? 'Next Question →' : 'View Results →'}
                </button>
              )}
            </div>
          ) : (
            <div className="animate-dissolve" style={{ textAlign: 'center', padding: '20px 0' }}>
              <h3 style={{ fontFamily: 'var(--font-serif-cinematic)', fontSize: '1.6rem', color: 'var(--gold-champagne)', marginBottom: '14px' }}>
                Retrospective Complete
              </h3>
              <p className="editorial-text" style={{ fontSize: '1.3rem', color: 'var(--text-ivory)', marginBottom: '28px' }}>
                You scored {score} out of {QUIZ_QUESTIONS.length}. But let's be honest — every memory we share is already a winning one.
              </p>
              <button onClick={resetQuiz} className="btn-cinematic">
                <RotateCcw size={16} /> Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
