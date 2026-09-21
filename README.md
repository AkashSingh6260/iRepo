# Happy Birthday Ishika 💕 — Digital Birthday Experience

A personalized, cinematic, and interactive birthday website built with HTML, CSS, and modern modular ES JavaScript.

---

## 📁 Modular Project Structure

```text
├── index.html           # Semantic, clean layout & section wrappers
├── styles.css           # Premium romantic theme (pink/purple, glassmorphism, responsive)
├── package.json         # Scripts for local development & preview
├── vercel.json          # 1-Click deployment config for Vercel
├── netlify.toml         # Deployment config for Netlify
├── .github/
│   └── workflows/
│       └── deploy.yml   # Automatic GitHub Pages CI/CD workflow
└── js/
    ├── data.js          # ⭐ SINGLE SOURCE OF TRUTH: customize photos, letters, quiz, music, messages
    ├── app.js           # Main app orchestrator
    ├── gallery.js       # Dynamic photo gallery + fullscreen lightbox & like counter
    ├── love.js          # "Things I Love About You" cards component
    ├── timeline.js      # Romantic milestone timeline component
    ├── letters.js       # Interactive "Open When..." unfoldable letters component
    ├── quiz.js          # Interactive trivia quiz with score & custom result cards
    ├── game.js          # "Catch the Hearts" 30-second canvas mini-game
    ├── music.js         # Floating music player (custom MP3 or romantic synth melody)
    ├── surprises.js     # 5-Tap secret message, celebration bursts & final confetti
    ├── particles.js     # Floating romantic background particles
    ├── animations.js    # Typewriter effect, scroll reveals, and parallax
    └── utils.js         # Helper functions & animation utilities
```

---

## ⚙️ How to Customize (Only 1 File to Edit!)

All personalized content is stored inside **`js/data.js`**. You do not need to touch any HTML!

- **Recipient / Sender Name**: Edit `BIRTHDAY_PERSON` and `HERO_CONFIG`.
- **Photos**: Add or change image URLs in the `PHOTOS` array.
- **Love Cards**: Edit or add entries in `LOVE_ITEMS`.
- **Memory Timeline**: Customize milestones in `TIMELINE`.
- **"Open When" Letters**: Edit envelopes & letters in `LETTERS`.
- **Birthday Message**: Update paragraphs in `BIRTHDAY_MESSAGE`.
- **Quiz Questions**: Customize trivia and answers in `QUIZ_QUESTIONS`.
- **Secret & Finale Messages**: Edit `SECRET_MESSAGE` and `FINALE_CONFIG`.
- **Background Music**: Set `audioUrl` in `MUSIC_CONFIG` to `'your-song.mp3'` or leave `null` for the built-in romantic melody.

---

## 🚀 Easy Deployment Options (100% Free)

### Option 1: Vercel (Fastest — 1 Minute)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **"Deploy"**.
4. ✨ You'll instantly receive a live `https://your-project.vercel.app` URL to share with Ishika!

*Alternatively, run in terminal:*
```bash
npx vercel
```

---

### Option 2: Netlify (No Git Required — 30 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire project folder into the browser window.
3. ✨ Netlify deploys it immediately and gives you a free live URL!

---

### Option 3: GitHub Pages
1. Push this folder to a GitHub repository named e.g. `birthday-ishika`.
2. Go to your repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish).
4. ✨ Your site is live at `https://<your-username>.github.io/<repo-name>/`!

---

## 💻 Running Locally

```bash
# Option A: With npm / npx
npm start
# or
npm run dev

# Option B: Direct HTTP server
npx -y http-server . -p 8080 -c-1 --cors
```

Then open `http://localhost:8080` in your browser.
