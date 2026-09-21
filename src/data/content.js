/* ============================================================
   src/data/content.js
   Single Source of Truth for Ishika ("Madam Jii")'s Experience
   ============================================================ */

export const RECIPIENT = {
  name: 'Ishika',
  nickname: 'Madam Jii',
  creator: 'Akash',
  tagline: 'A personalized cinematic journey through memory, mystery, and love.',
  year: 2025,
};

export const PROLOGUE = {
  quote: '"Some people arrive into our lives like quiet constellations — reshaping the entire night sky without asking for permission."',
  hint: 'A secret created specifically for you.',
  cta: 'Begin The Journey →',
};

export const HERO = {
  chapter: 'CHAPTER 01',
  superTitle: 'FOR ISHIKA',
  title: 'Happy Birthday, Madam Jii',
  subtitle: 'Today is not just another date on the calendar. It is the day the world was given your light.',
  scrollPrompt: 'Scroll to explore the chapters',
};

/* ── Cinematic Photos & Polaroids ── */
export const PHOTOS = [
  {
    id: 1,
    src: '20251216_081738.jpg',
    title: 'The Real You',
    date: 'A timeless moment',
    location: 'Wherever you are is home',
    caption: 'The way your presence alone brings warmth into an entire room.',
    rotation: -2.5,
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/736x/cb/ac/c7/cbacc72f13585614f992470eb1b809bd.jpg',
    title: 'Golden Hours',
    date: 'The quiet magic',
    location: 'Under amber skies',
    caption: 'In every crowd, my eyes will always search for you first.',
    rotation: 1.8,
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/736x/28/c1/df/28c1df523fb64b7374587ab73235369e.jpg',
    title: 'That Incomparable Smile',
    date: 'The purest joy',
    location: 'Shared laughter',
    caption: 'You smile, and suddenly everything confusing about the world makes sense.',
    rotation: -1.2,
  },
  {
    id: 4,
    src: 'https://i.pinimg.com/736x/07/df/62/07df628436c7c7cdb48686c94deccd7c.jpg',
    title: 'Carefree Days',
    date: 'Unscripted adventures',
    location: 'Every path with you',
    caption: 'It was never about where we were going, but that we were together.',
    rotation: 2.2,
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/736x/f9/39/91/f93991159da20a133d9f50dded746b5c.jpg',
    title: 'Soft Memories',
    date: 'Moments etched in time',
    location: 'In the stillness',
    caption: 'No words needed. Just two hearts beating in familiar harmony.',
    rotation: -2.0,
  },
  {
    id: 6,
    src: 'https://i.pinimg.com/736x/c9/f3/99/c9f3992671ef43cf502fe869dd663c42.jpg',
    title: 'Endless Horizons',
    date: 'Tomorrow & always',
    location: 'Every step ahead',
    caption: 'Here is to all the adventures waiting for us around the next corner.',
    rotation: 1.5,
  },
];

/* ── Interactive Memory Timeline ── */
export const TIMELINE = [
  {
    number: '01',
    phase: 'THE PROLOGUE',
    title: 'The Day We Met',
    description: 'We were just two strangers who happened to cross paths. I had no idea that brief introduction would become the most important chapter of my life.',
    significance: 'When ordinary time turned into destiny.',
  },
  {
    number: '02',
    phase: 'THE CONVERSATION',
    title: 'When Hours Felt Like Seconds',
    description: 'The first time we spoke properly, midnight slipped into 3 AM without either of us noticing. I remember thinking: "I never want this conversation to end."',
    significance: 'Finding a voice that felt like home.',
  },
  {
    number: '03',
    phase: 'THE TURNING POINT',
    title: 'The Uncontrollable Laughter',
    description: 'That silly, spontaneous moment where we couldn’t stop laughing until tears were in our eyes. Right there, every defensive wall I ever built quietly came down.',
    significance: 'The realization that you were irreplaceable.',
  },
  {
    number: '04',
    phase: 'THE RECOGNITION',
    title: 'Falling In Love Quietly',
    description: 'It wasn’t like thunder or fireworks. It was like watching dawn break over a quiet sea — steady, warm, undeniable, and breathtakingly beautiful.',
    significance: 'Knowing you were the one without question.',
  },
  {
    number: '05',
    phase: 'THE PRESENT',
    title: 'Celebrating You Today',
    description: 'Today is your day, Madam Jii. To be honored, cherished, spoiled, and reminded of how genuinely incredible you are to everyone lucky enough to know you.',
    significance: 'Another year of your grace in this world.',
  },
];

/* ── Progressively Unlocking Letters ── */
export const LETTERS = [
  {
    id: 'miss-me',
    label: 'Open When You Miss Me',
    preview: 'A reminder that distance is only physical...',
    color: '#d4af37',
    content: `Close your eyes for three seconds and take a slow breath. 
    
Remember that no matter where you are in this city or on this earth, you carry a permanent piece of my heart with you. Whenever you look up at the night sky, know that I am looking up at the exact same stars, thinking of you. You are never, ever alone.`,
  },
  {
    id: 'need-smile',
    label: 'Open When You Need A Smile',
    preview: 'For the days you forget how breathtaking your smile is...',
    color: '#c5a059',
    content: `Hey Madam Jii! Yes, you.
    
Did you know that your smile has this ridiculous, unfair superpower? You can walk into a room completely exhausted or stressed, and the second you smile, the whole atmosphere changes. Go look into a mirror right now — someone extraordinary is looking right back at you.`,
  },
  {
    id: 'heavy-heart',
    label: 'Open When Things Feel Heavy',
    preview: 'When the world is asking for too much...',
    color: '#8b263e',
    content: `Breathe. You do not have to carry everything all by yourself.
    
You are allowed to be tired. You are allowed to take a pause. You have conquered every single difficult day you've ever faced so far — your track record is 100%. Rest tonight. Tomorrow we will face whatever it is, side by side.`,
  },
  {
    id: 'cant-sleep',
    label: 'Open When You Cannot Sleep',
    preview: 'For the quiet hours between 2 AM and sunrise...',
    color: '#4a3b6b',
    content: `Since your thoughts are keeping you awake, let me give you something peaceful to think about:
    
Think of our calmest moments together. No rush. No expectations. Just stillness and comfort. Imagine us sitting on a quiet hilltop watching the city lights slowly flicker off one by one. You are safe. Close your eyes now.`,
  },
  {
    id: 'dream-big',
    label: 'Open When You Doubt Yourself',
    preview: 'When your inner voice forgets your strength...',
    color: '#e5b974',
    content: `Look at how far you have walked. Look at how much grace you have shown when things were hard.
    
You possess a quiet, fierce brilliance that inspires me every single day. Trust your intuition. Chase what sets your soul on fire. I believe in you even on the days you forget to believe in yourself.`,
  },
];

/* ── "Things I Never Said" ── */
export const THINGS_NEVER_SAID = [
  {
    tag: 'OBSERVATION',
    front: 'The way you treat ordinary people...',
    back: 'I watch how gently you treat strangers, waitstaff, and animals when nobody is looking. That unprompted kindness is the most beautiful thing about you.',
  },
  {
    tag: 'CONFESSION',
    front: 'The first five minutes after I see you...',
    back: 'Every single time we meet, no matter how long it has been, my heart beats noticeably faster for the first few minutes until you laugh.',
  },
  {
    tag: 'ADMIRATION',
    front: 'Your silent resilience...',
    back: 'You carry so many responsibilities with quiet elegance. You rarely complain, but I see how hard you work. I am so proud of you.',
  },
  {
    tag: 'PROMISE',
    front: 'In every version of my future...',
    back: 'Whenever I plan ahead — trips, milestones, dreams — you are never an afterthought. You are the foundation everything else is built around.',
  },
  {
    tag: 'GRATITUDE',
    front: 'How you made me a better person...',
    back: 'Being around you made me softer, more patient, and more grateful for everyday moments. Thank you for simply existing.',
  },
  {
    tag: 'SECRET',
    front: 'Why you are called Madam Jii...',
    back: 'Because you command respect effortlessly, yet have the softest, most genuine heart I have ever encountered.',
  },
];

/* ── Constellation Star Nodes ── */
export const CONSTELLATIONS = [
  {
    id: 1,
    name: 'Stella Serenitatis',
    title: 'The Star of Serenity',
    quote: 'In your presence, the noise of the entire world fades into quiet music.',
    x: 20,
    y: 35,
  },
  {
    id: 2,
    name: 'Stella Risus',
    title: 'The Star of Laughter',
    quote: 'Your laugh is my favorite sound across all languages and melodies.',
    x: 42,
    y: 20,
  },
  {
    id: 3,
    name: 'Stella Fortitudinis',
    title: 'The Star of Strength',
    quote: 'Your courage is soft like velvet, yet unbreakable like tempered steel.',
    x: 65,
    y: 40,
  },
  {
    id: 4,
    name: 'Stella Fidelitatis',
    title: 'The Star of Devotion',
    quote: 'A promise that wherever life leads you, you will always have my loyalty.',
    x: 82,
    y: 28,
  },
  {
    id: 5,
    name: 'Stella Aeterna',
    title: 'The Star of Tomorrow',
    quote: 'Here is to a hundred more birthdays, each one more radiant than the last.',
    x: 52,
    y: 70,
  },
];

/* ── Interactive Cake & Candle ── */
export const CAKE_DATA = {
  title: 'Make A Quiet Wish',
  instruction: 'Touch the golden flame to blow out the candle and send your wish into the universe.',
  wishGrantedText: 'Your wish has been whispered into the stars. May every prayer of your heart be fulfilled this year, Madam Jii.',
};

/* ── Trivia Quiz ── */
export const QUIZ_QUESTIONS = [
  {
    question: "What is Ishika's truest idea of paradise?",
    options: [
      'A loud, crowded party',
      'A serene evening with good food & deep conversation',
      'Running errands all day',
      'Strict schedules and zero chill',
    ],
    correct: 1,
    reflection: 'Serenity and good company will always triumph over chaos.',
  },
  {
    question: 'What is the fastest way to brighten Madam Jii\'s mood?',
    options: [
      'Lectures on productivity',
      'Her favorite food & heartfelt laughter',
      'An unexpected phone bill',
      'Traffic jams',
    ],
    correct: 1,
    reflection: 'Good food, genuine affection, and no stress. Works every single time.',
  },
  {
    question: 'Why was this website created in dark cinematic tones?',
    options: [
      'Because glittery pink templates are cliché',
      'To reflect elegance, mystery, and how special she is',
      'Because she deserves a bespoke digital gift, not a copy-paste project',
      'All of the above ❤️',
    ],
    correct: 3,
    reflection: 'Only something tailored, refined, and cinematic would do you justice.',
  },
  {
    question: 'What is one thing that will never change?',
    options: [
      'How much respect and affection Akash has for you',
      'The speed of light',
      'How pretty you look when you smile',
      'All of the above, indefinitely',
    ],
    correct: 3,
    reflection: 'Written in code, etched in memory, true forever.',
  },
];

/* ── Heartfelt Birthday Letter ── */
export const BIRTHDAY_LETTER = {
  heading: 'To The Girl Who Changed My World',
  date: 'Written for your special day',
  body: [
    "On this day, I wanted to create something that wasn’t just another temporary message or a cliché greeting card. I wanted to build a place that reflects the quiet depth and elegance of who you are.",
    "You have this rare, effortless ability to make people feel seen and valued. In a noisy world that constantly rushes, your presence is a sanctuary. Through every conversation, every shared silence, and every shared laugh, you have made my life infinitely richer.",
    "Thank you for being my anchor, my favorite confidante, and my greatest inspiration. May this new year of your life bring you boundless joy, peace in your spirit, courage in your dreams, and all the quiet wonders you so richly deserve.",
  ],
  signature: 'Forever with warmth and love,',
  sender: 'Akash',
};

/* ── Secret Lockbox Cipher ── */
export const SECRET_CIPHER = {
  hint: 'A 4-digit code protects this vault (Hint: The current year)',
  passcode: '2025',
  unlockedTitle: 'The Unlocked Vault 🗝️',
  secretMessage: `You cracked the code. Here is the truth:
  
From the moment you came into my life, you quietly became the standard by which I measure kindness, grace, and beauty. I don't always say it out loud, but there is no one else in the world like you, Ishika. 

Happy Birthday, my favorite person in the entire universe. ❤️`,
};

/* ── Ambient Audio Options ── */
export const AUDIO_CONFIG = {
  title: 'Cinematic Ambient Reverie',
  // Can be set to a custom mp3 file path like 'music.mp3' or left null for the built-in synthetic piano chimes
  src: null,
};
