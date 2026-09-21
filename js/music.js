/* ============================================================
   music.js — Elegant floating music player
   Supports custom audio files (mp3/wav) OR synthesized melody
   Only plays after user interaction (browser autoplay policy)
   ============================================================ */

import { MUSIC_CONFIG } from './data.js';

let audioCtx = null;
let isPlaying = false;
let melodyInterval = null;
let gainNode = null;
let audioElement = null;

// Romantic melody notes (frequencies in Hz) — sweet love tune
const MELODY = [
  { freq: 523.25, dur: 0.4 },  // C5
  { freq: 587.33, dur: 0.4 },  // D5
  { freq: 659.25, dur: 0.6 },  // E5
  { freq: 587.33, dur: 0.3 },  // D5
  { freq: 523.25, dur: 0.6 },  // C5
  { freq: 0, dur: 0.2 },        // rest
  { freq: 493.88, dur: 0.4 },  // B4
  { freq: 523.25, dur: 0.4 },  // C5
  { freq: 587.33, dur: 0.6 },  // D5
  { freq: 523.25, dur: 0.4 },  // C5
  { freq: 493.88, dur: 0.6 },  // B4
  { freq: 0, dur: 0.2 },        // rest
  { freq: 440.00, dur: 0.4 },  // A4
  { freq: 493.88, dur: 0.4 },  // B4
  { freq: 523.25, dur: 0.6 },  // C5
  { freq: 587.33, dur: 0.4 },  // D5
  { freq: 659.25, dur: 0.8 },  // E5
  { freq: 0, dur: 0.3 },        // rest
  { freq: 523.25, dur: 0.4 },  // C5
  { freq: 493.88, dur: 0.4 },  // B4
  { freq: 440.00, dur: 0.6 },  // A4
  { freq: 493.88, dur: 0.4 },  // B4
  { freq: 523.25, dur: 0.8 },  // C5
  { freq: 0, dur: 0.5 },        // rest
];

export function initMusicPlayer() {
  const btn = document.getElementById('music-toggle');
  if (!btn) return;

  // If a custom audio file is configured, preload it
  if (MUSIC_CONFIG && MUSIC_CONFIG.audioUrl) {
    try {
      audioElement = new Audio(MUSIC_CONFIG.audioUrl);
      audioElement.loop = true;
      audioElement.volume = MUSIC_CONFIG.volume || 0.3;
    } catch (err) {
      console.warn('Custom audio load error, using synthesized melody instead:', err);
      audioElement = null;
    }
  }

  btn.addEventListener('click', toggleMusic);
}

function toggleMusic() {
  const btn = document.getElementById('music-toggle');
  const icon = btn?.querySelector('.music-icon');

  if (!isPlaying) {
    // Start playback
    if (audioElement) {
      audioElement.play().then(() => {
        isPlaying = true;
        btn?.classList.add('playing');
        if (icon) icon.textContent = '🎵';
      }).catch(err => {
        console.warn('Audio element play failed, falling back to Web Audio:', err);
        startSyntheticMusic(btn, icon);
      });
    } else {
      startSyntheticMusic(btn, icon);
    }
  } else {
    // Stop playback
    isPlaying = false;
    if (audioElement) {
      audioElement.pause();
    }
    if (melodyInterval) {
      clearTimeout(melodyInterval);
    }
    btn?.classList.remove('playing');
    if (icon) icon.textContent = '🎵';
  }
}

function startSyntheticMusic(btn, icon) {
  initAudioContext();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  isPlaying = true;
  playMelody();
  btn?.classList.add('playing');
  if (icon) icon.textContent = '🎵';
}

function initAudioContext() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioCtx.createGain();
  gainNode.gain.value = MUSIC_CONFIG?.volume || 0.15;
  gainNode.connect(audioCtx.destination);
}

function playNote(freq, duration, startTime) {
  if (!audioCtx || freq === 0) return;

  const osc = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.value = freq;

  // Soft romantic envelope
  noteGain.gain.setValueAtTime(0, startTime);
  noteGain.gain.linearRampToValueAtTime(0.25, startTime + 0.05);
  noteGain.gain.linearRampToValueAtTime(0.12, startTime + duration * 0.5);
  noteGain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(noteGain);
  noteGain.connect(gainNode);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

function playMelody() {
  if (!audioCtx || !isPlaying) return;

  let time = audioCtx.currentTime + 0.1;

  MELODY.forEach(note => {
    if (note.freq > 0) {
      playNote(note.freq, note.dur, time);
    }
    time += note.dur;
  });

  const totalDuration = MELODY.reduce((sum, n) => sum + n.dur, 0);

  melodyInterval = setTimeout(() => {
    if (isPlaying) playMelody();
  }, totalDuration * 1000);
}
