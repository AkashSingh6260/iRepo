/* ============================================================
   src/App.jsx
   Master Stage Orchestrator for the Cinematic Birthday Experience
   ============================================================ */

import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import { useAudio } from './hooks/useAudio';

// Sections
import Prologue from './sections/Prologue';
import HeroReveal from './sections/HeroReveal';
import PolaroidGallery from './sections/PolaroidGallery';
import Timeline from './sections/Timeline';
import UnlockedLetters from './sections/UnlockedLetters';
import ThingsNeverSaid from './sections/ThingsNeverSaid';
import ConstellationSky from './sections/ConstellationSky';
import InteractiveCake from './sections/InteractiveCake';
import MiniGame from './sections/MiniGame';
import TriviaQuiz from './sections/TriviaQuiz';
import LoveLetter from './sections/LoveLetter';
import SecretCipher from './sections/SecretCipher';
import GrandFinale from './sections/GrandFinale';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const { isPlaying, startAudio, toggleAudio } = useAudio();

  const handleUnlock = () => {
    setUnlocked(true);
    // User interaction enables audio playback
    startAudio();
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-abyss)' }}>
      {/* 1. Mysterious Entrance Gate */}
      {!unlocked && <Prologue onUnlock={handleUnlock} />}

      {/* 2. Global Ambient Visuals */}
      <ParticleCanvas />

      {/* 3. Navigation and Sound Controls */}
      {unlocked && (
        <>
          <Navbar />
          <AudioPlayer isPlaying={isPlaying} toggleAudio={toggleAudio} />
        </>
      )}

      {/* 4. The Unfolding Chapters */}
      <main style={{ opacity: unlocked ? 1 : 0, transition: 'opacity 1s ease' }}>
        <HeroReveal />
        <PolaroidGallery />
        <Timeline />
        <UnlockedLetters />
        <ThingsNeverSaid />
        <ConstellationSky />
        <InteractiveCake />
        <MiniGame />
        <TriviaQuiz />
        <LoveLetter />
        <SecretCipher />
        <GrandFinale />
      </main>
    </div>
  );
}
