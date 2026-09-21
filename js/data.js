/* ============================================================
   data.js — Single Source of Truth for Birthday Content & Config
   ============================================================
   Edit this file to customize any text, photos, letters, quiz,
   or music for the birthday celebration before deploying!
   ============================================================ */

/* ── Person & Hero Configuration ── */
export const BIRTHDAY_PERSON = {
  name: 'madam jii',
  from: 'Adwait',
  year: 2025,
};

export const HERO_CONFIG = {
  title: 'Happy Birthday madam jii 💕',
  subtitle: 'Today is all about celebrating you and the joy you bring to my life ✨',
  ctaText: 'Start the Celebration 🎉',
};

/* ── Gallery Photos ── */
export const PHOTOS = [
  {
    src: '20251216_081738.jpg',
    alt: 'Beautiful moment',
    caption: 'Every moment with you is magical',
  },
  {
    src: 'https://i.pinimg.com/736x/28/c1/df/28c1df523fb64b7374587ab73235369e.jpg',
    alt: 'Sweet memory',
    caption: 'Your smile lights up my world',
  },
  {
    src: 'https://i.pinimg.com/736x/07/df/62/07df628436c7c7cdb48686c94deccd7c.jpg',
    alt: 'Happy times',
    caption: 'Adventures together',
  },
  {
    src: 'https://i.pinimg.com/736x/f9/39/91/f93991159da20a133d9f50dded746b5c.jpg',
    alt: 'Love moment',
    caption: 'My heart belongs to you',
  },
  {
    src: 'https://i.pinimg.com/736x/c9/f3/99/c9f3992671ef43cf502fe869dd663c42.jpg',
    alt: 'Beautiful day',
    caption: 'Creating memories together',
  },
  {
    src: 'https://i.pinimg.com/736x/2b/f6/57/2bf6577a11fbc6dd8adeaf99be4f51b8.jpg',
    alt: 'Romantic moment',
    caption: 'Forever and always',
  },
];

/* ── Things I Love About You ── */
export const LOVE_ITEMS = [
  { icon: '😊', title: 'Your Smile', text: 'The way your smile can light up even the darkest room and make everything feel okay.' },
  { icon: '😂', title: 'Your Laugh', text: 'That contagious laugh of yours that makes me fall in love with you all over again.' },
  { icon: '💪', title: 'Your Strength', text: 'How you handle every challenge with grace and never give up no matter what.' },
  { icon: '🤗', title: 'Your Kindness', text: 'The way you care about everyone around you and always put others first.' },
  { icon: '🌟', title: 'Your Ambition', text: 'Your determination to chase your dreams inspires me every single day.' },
  { icon: '🎨', title: 'Your Creativity', text: 'The beautiful way you see the world differently and make everything more colorful.' },
  { icon: '💕', title: 'Your Love', text: 'How you love so deeply and make me feel like the luckiest person alive.' },
  { icon: '✨', title: 'Your Magic', text: 'Everything about you is magical — you make ordinary moments extraordinary.' },
];

/* ── Memory Timeline ── */
export const TIMELINE = [
  {
    icon: '💫',
    title: 'The Day We Met',
    text: 'Some moments change everything. Meeting you was one of those moments that made my whole world brighter.',
    tag: 'The Beginning',
  },
  {
    icon: '💬',
    title: 'First Conversation',
    text: 'Hours felt like minutes. I knew from that very first conversation that you were someone truly special.',
    tag: 'Getting Closer',
  },
  {
    icon: '😂',
    title: 'First Time We Laughed Together',
    text: 'That uncontrollable laughter we shared — I knew right then that I never wanted to stop hearing your laugh.',
    tag: 'Pure Joy',
  },
  {
    icon: '❤️',
    title: 'When I Fell for You',
    text: "It wasn't one big moment — it was a thousand little ones. Your smile, your words, your heart. I just knew.",
    tag: 'Falling in Love',
  },
  {
    icon: '🌟',
    title: 'Today & Forever',
    text: "Every day with you is an adventure. Today we celebrate you, and I can't wait for all the tomorrows together.",
    tag: 'Our Story Continues',
  },
];

/* ── Open When Letters ── */
export const LETTERS = [
  {
    label: 'Open When You Miss Me',
    icon: '💌',
    color: '#ff6b9d',
    content: "Close your eyes and take a deep breath. Remember that no matter where I am, my heart is always with you. Every moment apart just makes our moments together even more precious. I'm always just a thought away. 💕",
  },
  {
    label: 'Open When You Need a Smile',
    icon: '😊',
    color: '#c084fc',
    content: "Hey you! Yes, you with the gorgeous face! Did you know that your smile is literally my favorite thing in the entire universe? It's true. Now stop reading this and go look in the mirror — there's someone absolutely amazing looking back at you! 😄",
  },
  {
    label: 'Open When You Feel Down',
    icon: '🌈',
    color: '#f472b6',
    content: "Bad days are just that — bad DAYS, not a bad life. You are so much stronger than you think. Remember all the mountains you've already climbed? This is just another small hill. And I'll be right here beside you, every step of the way. 🌈",
  },
  {
    label: "Open When You Can't Sleep",
    icon: '🌙',
    color: '#a78bfa',
    content: "Hey sleepyhead! Since you're awake anyway, here's a fun fact: did you know I think about you approximately 847 times a day? Okay, I didn't count, but it feels like that. Now close your eyes, imagine us stargazing together, and drift off to dreamland. 🌙",
  },
  {
    label: 'Open When You Want an Adventure',
    icon: '🗺️',
    color: '#fb7185',
    content: "Pack your imagination (and maybe some snacks)! Life is full of adventures waiting for us. Whether it's exploring a new place, trying something crazy, or just getting lost together — every adventure is better with you by my side. Let's make more memories! 🗺️",
  },
];

/* ── Birthday Message ── */
export const BIRTHDAY_MESSAGE = {
  title: 'A Special Message for You',
  paragraphs: [
    "On this special day, I want you to know how grateful I am to have you in my life. Your laughter fills my days with joy, your love gives me strength, and your presence makes everything better. You are not just my girlfriend, you are my best friend, my partner in crime, and the love of my life.",
    "Today, we celebrate you – your kindness, your beauty, your amazing spirit, and all the wonderful things that make you uniquely you. I hope this new year of your life brings you endless happiness, incredible adventures, and all your dreams come true.",
  ],
  signature: "Happy Birthday, my love! Here's to many more years of laughter, love, and beautiful memories together. 💕",
};

/* ── Catch the Hearts Game Configuration ── */
export const GAME_CONFIG = {
  duration: 30,
  emojis: ['❤️', '💖', '💕', '💗', '💝', '🌹'],
};

/* ── Quiz Questions ── */
export const QUIZ_QUESTIONS = [
  {
    question: "What's Ishika's idea of a perfect day?",
    options: [
      'Adventuring somewhere new',
      'Cozy day with good food & movies',
      'Shopping spree all day',
      'Partying with friends',
    ],
    correct: 1,
  },
  {
    question: 'What makes Ishika laugh the most?',
    options: [
      'Funny memes',
      'Silly jokes & puns',
      'Unexpected surprises',
      'All of the above',
    ],
    correct: 3,
  },
  {
    question: "What's the best gift you could give Ishika?",
    options: [
      'Something expensive',
      'A thoughtful, personalized gift',
      'Food. Always food.',
      'A handwritten letter',
    ],
    correct: 1,
  },
  {
    question: 'How would Ishika react to this birthday website?',
    options: [
      '"Who has this much free time?"',
      '"This is so cute I might cry!"',
      '"Send me the source code"',
      '"Is there cake somewhere?"',
    ],
    correct: 1,
  },
  {
    question: 'What does Ishika deserve?',
    options: [
      'The whole world',
      'All the happiness ever',
      'Everything her heart desires',
      'All of the above and more ❤️',
    ],
    correct: 3,
  },
];

export const QUIZ_RESULTS = {
  perfect: "You know me better than I know myself! 💕 This is true love!",
  great: "Wow, you really pay attention! You're amazing! 🌟",
  good: "Not bad! You know me pretty well! Keep learning! 😊",
  okay: "Hmm, we need to spend more time together! 😂",
};

/* ── Secret Message ── */
export const SECRET_MESSAGE = {
  hint: 'Psst... try tapping this section 5 times! 🤫',
  title: 'You Found My Secret! 🤫',
  content: "Here's something I've never told you before: From the very first moment I saw you, I knew my life was about to change forever. You are my greatest adventure, my deepest comfort, and my most beautiful dream come true. I love you more than words could ever express — and I'll spend every day trying to show you just how much. You are my everything, Ishika. Always and forever. ❤️",
};

/* ── Finale Surprise ── */
export const FINALE_CONFIG = {
  buttonText: '✨ Open Your Final Surprise ✨',
  title: 'Happy Birthday, Ishika!',
  text: "You are the most amazing, beautiful, kind-hearted person I've ever known. Thank you for being you. Thank you for every smile, every hug, every moment. Here's to another year of making incredible memories together. I love you more than all the stars in the sky. Forever yours. ❤️",
};

/* ── Background Music Settings ── */
export const MUSIC_CONFIG = {
  // Option 1: Leave audioUrl as null to use built-in sweet synthesized romantic melody
  // Option 2: Set to your MP3 path like 'music.mp3' or any direct https link
  audioUrl: null,
  volume: 0.25,
};

/* ── Floating Particle Emojis ── */
export const PARTICLE_EMOJIS = ['❤️', '💕', '💖', '💗', '🌸', '🌺', '✨', '💫', '🦋', '🌷', '🌹'];
