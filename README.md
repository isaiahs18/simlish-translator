# 🎵 Simlish Song Translator

A fun, phonetic translator that converts English song lyrics into **Simlish** — the fictional language spoken by Sims characters in *The Sims* video game series — with perfect syllable matching so you can actually sing along!

---

## 🤔 What Is This?

**Simlish** is the invented language used in *The Sims* franchise since 1999. Many real-world artists have officially recorded their hit songs in Simlish (Katy Perry, The Black Eyed Peas, Lily Allen, and more). This tool lets you translate *any* English song lyrics into Simlish using those same phonetic patterns, so the translated words fit the original rhythm and melody perfectly.

Whether you're a Sims fan, a content creator, a musician, or just someone who loves the absurd joy of Simlish, this translator makes it easy to get authentic-sounding results in seconds.

---

## ✨ Features

- **Side-by-side translation** — English and Simlish columns with synchronized scrolling
- **Exact syllable matching** — Keeps the rhythm of the original song intact
- **Context-aware phrases** — Selects the best Simlish variant based on surrounding words
- **Deterministic output** — The same English word always produces the same Simlish word
- **Rhyme family support** — Preserves rhyme schemes so your translated lyrics still rhyme
- **Curated dictionary** — 250+ entries sourced from official Simlish recordings
- **Phonetic fallback** — Generates authentic-sounding Simlish for any word not in the dictionary

---

## 🎮 How to Use

1. Open **`index.html`** in your browser for the side-by-side song layout *(recommended for lyrics)*
2. Or open **`index-classic.html`** for a top-to-bottom layout *(good for general text)*
3. Paste your English song lyrics into the left/top text box
4. Click **"Translate to Simlish"**
5. The Simlish translation appears alongside the original — both panels scroll in sync!

**No installation, no build step, no internet connection required** — just open the HTML file and start translating.

---

## 🎵 Example Translations

```
English:  Got a little boom in my big truck
Simlish:  Gobba libba doo bi up smurp nurp

English:  Honky tonk badonkadonk
Simlish:  Hurky durk badurkadurk

English:  I love you
Simlish:  Meshaloob  (or "Por see gab lurv" depending on context)

English:  Hello, how are you?
Simlish:  Sul sul hooba noobie yib
```

---

## 🧠 How It Works

The translator runs each line of text through a multi-stage pipeline:

```
Input Text
    │
    ▼
[1] Normalize & split into lines
    │
    ▼
[2] Context-aware phrase matching
    │   (multi-word phrases checked first for natural flow)
    ▼
[3] Dictionary lookup
    │   (250+ curated English → Simlish entries)
    ▼
[4] Semantic category matching
    │   (groups like "movement", "happiness" map to Simlish concepts)
    ▼
[5] Compound word derivation
    │   (extracts translation from longer dictionary entries)
    ▼
[6] Phonetic generation (fallback)
        (creates Simlish-sounding words using vowel/consonant rules)
```

### Translation Priority

| Priority | Method | Example |
|----------|--------|---------|
| 1 (highest) | Exact phrase match | `"i love you"` → `"meshaloob"` |
| 2 | Context-aware variant | `"i love you baby"` → `"por see gab lurv"` |
| 3 | Dictionary word lookup | `"boom"` → `"bloom"` |
| 4 | Semantic category | `"run"` → `"zooma"` (movement category) |
| 5 | Compound derivation | `"fish"` from `"catfish"` entry |
| 6 (fallback) | Phonetic generation | `"amplify"` → `"ambleefoo"` |

### Phonetic Rules

The phonetic engine transforms English sounds into Simlish-sounding equivalents:

- **Vowel shifts:** `e → i`, `i → ee`, `o → oo`
- **Consonant clusters:** `st → sk`, `tr → tur`, `ll → lv`
- **Simlish suffixes:** `-a`, `-ip`, `-ee`, `-er`, `-ba`

### Dictionary Sources

The curated dictionary is built from:
- Official Simlish recordings by Katy Perry, The Black Eyed Peas, Lily Allen, and others
- *The Sims* in-game dialogue and developer interviews
- *The Sims* Wiki and community resources
- Analysis of 210+ Simlish songs

---

## 📁 Project Structure

```
simlish-translator/
├── index.html              # Main UI (side-by-side layout — best for songs)
├── index-classic.html      # Alternative UI (top-to-bottom layout)
├── script.js               # Core translation logic
├── simlish-config.js       # Language configuration & rules
├── context-aware.js        # Context-aware phrase system
├── style.css               # Styles for main layout
│
├── js/
│   ├── phonetic-engine.js  # Phonetic transformation engine
│   ├── simlish-data.js     # Embedded dictionary data
│   ├── data-loader.js      # Data loading module
│   └── core/
│       └── translator.js   # Core SimlishTranslator class
│
├── data/
│   ├── dictionary.json         # Core English → Simlish dictionary
│   ├── contextual-phrases.json # Context-aware phrase variants
│   └── semantic-categories.json# Semantic groupings (movement, emotion, etc.)
│
├── test-translation.html   # Manual translation tests
├── test-phonetic.html      # Manual phonetic engine tests
│
└── docs/                   # Additional documentation
    ├── HOW_IT_WORKS.md
    ├── PHONETIC_RULES.md
    ├── CONFIGURATION.md
    └── ...
```

---

## 🔧 Customization

You can extend the translator without touching the core engine:

- **Add dictionary entries** — Edit `data/dictionary-core.json` for simple word/phrase pairs (clean JSON), or `data/dictionary.js` for full song-based entries with comments
- **Add contextual phrases** — Edit `data/contextual-phrases.json` to add weighted phrase variants
- **Add semantic categories** — Edit `data/semantic-categories.json` to map concept groups
- **Adjust phonetic rules** — Edit `js/phonetic-engine.js` to tune the fallback generator

---

## 🧪 Testing

Open either test page in your browser to verify translations:

```bash
open test-translation.html   # Tests dictionary & predictive word generation
open test-phonetic.html      # Tests phonetic engine transformations
```

Both pages display a pass/fail table so you can quickly spot any regressions after making changes.

---

## 🚀 Deployment

This is a **pure static site** — no server, no build step needed.

**GitHub Pages (recommended):**
1. Push your repo to GitHub
2. Go to **Settings → Pages**
3. Select the `main` branch as source
4. Your site goes live at `https://YOUR-USERNAME.github.io/simlish-translator`

**Netlify / Vercel:** Connect your GitHub repo and deploy in one click.

**Local:** Just open `index.html` directly in any modern browser.

---

## 🎁 What Can You Gain From This?

| Use Case | Benefit |
|----------|---------|
| **Sims fans** | Translate your favorite songs into Simlish for an authentic in-game feel |
| **Content creators** | Generate Simlish lyrics for YouTube videos, TikToks, or Sims Let's Plays |
| **Musicians** | Write original Simlish songs that fit real melodies |
| **Educators / developers** | Learn how phonetic translation engines work with a fun, low-stakes example |
| **Hobbyists** | Explore natural language processing concepts (dictionary lookup, context weighting, phonetic rules) through readable vanilla JavaScript |

---

## 📝 Credits

Built with love for Sims fans and music enthusiasts!  
Dictionary sourced from official Simlish recordings and *The Sims* community research.
