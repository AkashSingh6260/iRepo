# Happy Birthday Madam Jii ✦ — A Dark Cinematic Birthday Surprise Experience

A bespoke, mysterious, and deeply intimate interactive birthday experience crafted by **Akash** for **Ishika ("Madam Jii")**.

Built from scratch using **React + Vite** with a cinematic dark luxury aesthetic (obsidian, midnight navy, royal burgundy, warm champagne gold, and candlelit glow).

---

## 🧭 The Narrative Arc

$$\text{MYSTERY} \longrightarrow \text{CURIOSITY} \longrightarrow \text{DISCOVERY} \longrightarrow \text{MEMORIES} \longrightarrow \text{EMOTION} \longrightarrow \text{SURPRISE} \longrightarrow \text{FINAL REVEAL ❤️}$$

1. **The Mysterious Prologue** — *"Someone crafted a quiet mystery for you..."* with an ambient gateway button.
2. **Chapter 01: Grand Entrance** — Celestial typography tribute for Madam Jii.
3. **Chapter 02: Frozen Memories** — Physical vintage polaroids with tilt physics, likes, and cinematic Lightbox.
4. **Chapter 03: The Timeline** — Milestone journey tracing the moments when ordinary time turned into destiny.
5. **Chapter 04: Wax-Sealed Letters** — Five "Open When..." envelopes that unlock and unfold realistically.
6. **Chapter 05: Things I Never Said** — 3D interactive confession cards that flip to reveal quiet truths.
7. **Chapter 06: Constellation of Us** — Interactive night sky: touch glowing star nodes to reveal celestial blessings.
8. **Chapter 07: The Wish** — Architectural birthday cake with an interactive flickering candle: touch the flame to blow it out with rising smoke and golden sparks.
9. **Chapter 08: Celestial Catch** — 25-second stardust gathering mini-game with custom praise.
10. **Chapter 09: Lore Retrospective** — Personalized trivia quiz with immediate reflection insights.
11. **Chapter 10: The Letter** — Deckle-edge parchment birthday letter from Akash.
12. **Chapter 11: The Vault** — Interactive 4-digit keypad cipher unlocking Akash's deepest hidden note.
13. **Chapter 12: Grand Finale** — Champagne celebration with full-screen golden stardust fireworks.

---

## 📁 React Architecture

```text
src/
├── main.jsx                       # React entry point
├── App.jsx                        # Master stage orchestrator
├── data/
│   └── content.js                 # ⭐ SINGLE SOURCE OF TRUTH (photos, letters, quiz, memories)
├── styles/
│   ├── index.css                  # Obsidian, champagne, burgundy variables & typography
│   ├── animations.css             # Candle flicker, star twinkle, 3D flip, smoke dissipating
│   └── components.css             # Polaroids, glassmorphism, wax seals, lockbox keypad
├── hooks/
│   └── useAudio.js                # Ambient piano chord synthesizer & MP3 player hook
├── components/
│   ├── Navbar.jsx                 # Minimalist floating chapter navigation
│   ├── AudioPlayer.jsx            # Floating ambient sound controller
│   ├── Lightbox.jsx               # Fullscreen cinematic photo modal
│   └── ParticleCanvas.jsx         # Subtle warm golden stardust motes (non-intrusive)
└── sections/
    ├── Prologue.jsx               # Mysterious gateway
    ├── HeroReveal.jsx             # Chapter 1 Entrance
    ├── PolaroidGallery.jsx        # Chapter 2 Polaroids
    ├── Timeline.jsx               # Chapter 3 Memory timeline
    ├── UnlockedLetters.jsx        # Chapter 4 Wax-seal letters
    ├── ThingsNeverSaid.jsx        # Chapter 5 3D flip cards
    ├── ConstellationSky.jsx       # Chapter 6 Stargazing sky
    ├── InteractiveCake.jsx        # Chapter 7 Candle blow-out
    ├── MiniGame.jsx               # Chapter 8 Stardust catch
    ├── TriviaQuiz.jsx             # Chapter 9 Trivia lore
    ├── LoveLetter.jsx             # Chapter 10 Parchment letter
    ├── SecretCipher.jsx           # Chapter 11 Lockbox keypad
    └── GrandFinale.jsx            # Chapter 12 Celebration
```

---

## ⚙️ Customization (Only 1 File)

To customize any text, milestone, photo, or question, simply edit **`src/data/content.js`**.

---

## 🚀 Deployment (Netlify, Vercel & GitHub Pages Ready)

### Netlify
- **Command:** `npm run build`
- **Publish directory:** `dist`
- *(Or drag-and-drop the `dist` folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop)).*

### GitHub Pages
- The included `.github/workflows/deploy.yml` automatically builds and deploys to GitHub Pages on every `git push`.

### Vercel
- Automatically recognizes Vite and deploys `dist/` with one click.
