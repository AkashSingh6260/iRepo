/* ============================================================
   src/hooks/useAudio.js
   Cinematic Web Audio Synthesizer & MP3 Player Hook
   Plays serene romantic ambient chords without external dependencies
   ============================================================ */

import { useState, useEffect, useRef } from 'react';
import { AUDIO_CONFIG } from '../data/content';

// Atmospheric chord frequencies (Hz) for romantic cinematic piano reverie
const CHORD_PROGRESSIONS = [
  // F Major 9 (Dreamy & Warm)
  [174.61, 261.63, 329.63, 349.23, 392.00], 
  // D minor 7 (Intimate & Nostalgic)
  [146.83, 220.00, 261.63, 293.66, 349.23], 
  // Bb Major 7 (Gentle & Expansive)
  [116.54, 174.61, 233.08, 293.66, 349.23], 
  // C Suspended 4 -> C Major (Resolution)
  [130.81, 196.00, 261.63, 293.66, 329.63]
];

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const chordTimerRef = useRef(null);
  const htmlAudioRef = useRef(null);
  const currentChordIdxRef = useRef(0);

  useEffect(() => {
    // If a custom audio file is provided in content.js
    if (AUDIO_CONFIG.src) {
      const audio = new Audio(AUDIO_CONFIG.src);
      audio.loop = true;
      audio.volume = 0.35;
      htmlAudioRef.current = audio;
    }

    return () => {
      stopAudio();
    };
  }, []);

  const initWebAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.connect(ctx.destination);

      audioCtxRef.current = ctx;
      masterGainRef.current = gain;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playSynthesizedChord = () => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;
    const chord = CHORD_PROGRESSIONS[currentChordIdxRef.current];

    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Warm acoustic envelope
      const delay = idx * 0.08;
      const startTime = now + delay;
      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.gain.linearRampToValueAtTime(0.045, startTime + 1.2);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 5.5);

      osc.connect(noteGain);
      noteGain.connect(masterGainRef.current);

      osc.start(startTime);
      osc.stop(startTime + 6.0);
    });

    currentChordIdxRef.current = (currentChordIdxRef.current + 1) % CHORD_PROGRESSIONS.length;
    chordTimerRef.current = setTimeout(playSynthesizedChord, 5200);
  };

  const startAudio = () => {
    if (htmlAudioRef.current) {
      htmlAudioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('HTML5 audio play blocked, using synthetic tone:', err);
        initWebAudio();
        setIsPlaying(true);
        playSynthesizedChord();
      });
    } else {
      initWebAudio();
      setIsPlaying(true);
      playSynthesizedChord();
    }
  };

  const stopAudio = () => {
    setIsPlaying(false);
    if (htmlAudioRef.current) {
      htmlAudioRef.current.pause();
    }
    if (chordTimerRef.current) {
      clearTimeout(chordTimerRef.current);
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  return { isPlaying, startAudio, stopAudio, toggleAudio };
}
