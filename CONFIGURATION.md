# Simlish Translator - Configuration Guide

## Overview
The Simlish translator now uses a structured configuration system (`simlish-config.js`) that makes it easier to maintain consistency, add grammar rules, and expand the dictionary.

## File Structure

```
simlish-translator/
├── index.html              # Main UI (side-by-side)
├── script.js               # Translation logic
├── simlish-config.js       # ⭐ NEW: Language configuration
├── style.css               # Styling
└── CONFIGURATION.md        # This file
```

## Configuration Structure

### 1. **Phonetics** (`SimlishConfig.phonetics`)
Defines the basic sound rules:
- `vowels`: Which letters count as vowels (no 'y')
- `consonants`: Available consonants
- `syllableRules`: Structural rules for syllables

### 2. **Syllables** (`SimlishConfig.syllables`)
Three types of syllable pools:

#### Simple Syllables
Used for **long words (3+ syllables)**
```javascript
simple: ['ba', 'da', 'ga', 'na', 'ra', ...]
```

#### Complex Syllables
Used for **short words (1-2 syllables)**
```javascript
complex: ['sul', 'dag', 'vad', 'ben', 'gweb', ...]
```

#### Consonant-Based Syllables
Used for **5+ letter words** - maps second consonant to syllables
```javascript
byConsonant: {
    'b': ['bah', 'ben', 'bloo', ...],
    'r': ['ra', 'tur', 'turd', 'ber', 'sher'],
    ...
}
```

### 3. **Grammar Rules** (`SimlishConfig.grammar`)
Structured rules that can be toggled on/off:

```javascript
grammar: {
    noSingleLetters: {
        enabled: true,
        fallback: 'ah'
    },
    plurals: {
        enabled: true,
        suffix: 's',
        checkDictionary: true
    },
    // ... more rules
}
```

**Available Rules:**
- `noSingleLetters` - Prevents single-letter words
- `plurals` - Handles plural forms (adds 's')
- `possessives` - Handles possessives (adds syllable + 's')
- `theArticle` - "The" repeats previous word or uses 'ah'
- `contractions` - Don't/can't use first letter + 'ah'
- `capitalization` - Preserves proper nouns
- `indentation` - Preserves whitespace for lyrics

### 4. **Dictionary** (`SimlishConfig.dictionary`)
Organized by category for easy maintenance:

```javascript
dictionary: {
    greetings: { 'hello': 'sul sul', ... },
    emotions: { 'love': 'meshaloob', ... },
    questions: { 'what': 'cuh', ... },
    phrases: { 'got a': 'gobba', ... },
    songWords: { 'shake': ['sherb', 'sherber'], ... },
    rhymes: { 'maker': 'maka', 'shaker': 'shaka', ... },
    // ... more categories
}
```

## How to Add New Content

### Adding a New Word
1. Choose the appropriate category in `dictionary`
2. Add the mapping:
```javascript
songWords: {
    'newword': 'simlishversion',
    // or with multiple options:
    'anotherword': ['option1', 'option2']
}
```

### Adding a Rhyme Family
Add to the `rhymes` category:
```javascript
rhymes: {
    // -ation rhymes
    'nation': 'nasha',
    'station': 'stasha',
    'creation': 'creasha'
}
```

### Adding a New Syllable
Add to the appropriate pool:
```javascript
syllables: {
    complex: [..., 'newsyl'],
    // or for consonant-based:
    byConsonant: {
        'n': [..., 'newsyl']
    }
}
```

### Adding a New Grammar Rule
1. Define the rule in `grammar`:
```javascript
grammar: {
    myNewRule: {
        enabled: true,
        option1: 'value',
        option2: true
    }
}
```

2. Implement the logic in `script.js`

## Benefits of This Structure

### ✅ **Easier Maintenance**
- All language data in one file
- Clear categories and organization
- Easy to find and update entries

### ✅ **Better Consistency**
- Centralized syllable pools
- Structured grammar rules
- No duplicate definitions

### ✅ **Easier Testing**
- Can export/import configurations
- Can create test configurations
- Can validate data structure

### ✅ **Scalability**
- Easy to add new categories
- Can split into multiple files if needed
- Can add metadata (tags, notes, etc.)

## Context-Aware Translation System

### Overview
The translator now includes a sophisticated context-aware translation system that selects the most appropriate Simlish variant based on surrounding words and semantic meaning.

### Translation Priority Order

The new translation priority is:

1. **Exact dictionary match** (highest priority)
2. **Context-aware phrase matching** - Checks for phrases with multiple variants
3. **Dictionary lookup** - Standard word-for-word translation
4. **Semantic category matching** - Concept-based translation
5. **Fallback synonyms** - Common word mappings
6. **Syllable-based generation** (lowest priority)

### Contextual Phrases

Contextual phrases have multiple valid translations that are selected based on nearby words.

**Example: "I love you"**
```javascript
'i love you': [
    {
        simlish: 'por see gab lurv',
        context: ['so', 'much', 'really', 'truly'],
        weight: 1.5  // Romantic context
    },
    {
        simlish: 'meshaloob',
        context: ['baby', 'babe', 'honey', 'darling'],
        weight: 1.2  // Casual/affectionate context
    }
]
```

**Usage:**
- "I love you so much" → `por see gab lurv soo pik` (romantic)
- "I love you baby" → `meshaloob nooboo` (casual)

**Available Contextual Phrases:**
- `i love you` - 3 variants (romantic, casual, things)
- `love` - 2 variants (romantic, things)
- `hot` - 3 variants (temperature, attractive, trending)
- `cool` - 2 variants (temperature, awesome)
- `fire` - 2 variants (literal, slang amazing)
- `sick` - 2 variants (illness, slang awesome)
- `dance` - 2 variants (party, formal)

### Semantic Categories

Semantic categories group words by meaning for concept-based translation.

**Example: Movement Category**
```javascript
movement: {
    simlish: 'zooma',
    words: ['walk', 'run', 'move', 'go', 'travel', 'walking', 'running']
}
```

**Usage:**
- "I'm walking" → `yob-a zooma` (movement concept)
- "She's running" → `gurn zooma` (movement concept)

**Available Categories:**

**Actions:**
- Movement: `walk, run, move, go` → `zooma`
- Communication: `talk, speak, say, tell` → `yabba`
- Copying: `imitate, copy, mimic` → `copyba`
- Eating: `eat, consume, devour` → `nomnom`
- Drinking: `drink, sip, gulp` → `sploosh`
- Sleeping: `sleep, rest, nap` → `slerp`
- Working: `work, labor, toil` → `worka`
- Playing: `play, game` → `yibsy`
- Singing: `sing, hum, croon` → `la la`

**Emotions:**
- Happiness: `happy, joyful, cheerful` → `ooh be gah`
- Sadness: `sad, unhappy, depressed` → `awasa poa`
- Anger: `angry, mad, furious` → `benzi chibna looble`
- Fear: `scared, afraid, frightened` → `feebee`
- Excitement: `excited, thrilled, pumped` → `whippna choba dog`

**States:**
- Hunger: `hungry, starving, famished` → `chumcha`
- Thirst: `thirsty, parched` → `sploosh`
- Tiredness: `tired, exhausted, sleepy` → `slerp`
- Health: `healthy, well, fit` → `ooh be gah`

### Adding New Contextual Phrases

To add a new contextual phrase, edit `context-aware.js`:

```javascript
contextualPhrases: {
    'your phrase': [
        {
            simlish: 'translation variant 1',
            context: ['word1', 'word2', 'word3'],
            weight: 1.5  // Higher weight = preferred when context matches
        },
        {
            simlish: 'translation variant 2',
            context: ['word4', 'word5'],
            weight: 1.0
        }
    ]
}
```

### Adding New Semantic Categories

To add a new semantic category, edit `context-aware.js`:

```javascript
semanticCategories: {
    categoryName: {
        simlish: 'simlish_translation',
        words: ['word1', 'word2', 'word3', 'variant1', 'variant2']
    }
}
```

**Tips:**
- Include all word forms (walk, walking, walked)
- Group by core meaning, not just synonyms
- Use authentic Simlish from official sources when possible

---

## Next Steps

### To Use This Configuration:
1. Load `simlish-config.js` before `script.js` in `index.html`:
```html
<script src="simlish-config.js"></script>
<script src="script.js"></script>
```

2. Update `script.js` to use `SimlishConfig` instead of hardcoded data

### Future Enhancements:
- Add JSON export/import for sharing configurations
- Add validation to ensure data integrity
- Add metadata (pronunciation guides, usage notes)
- Create a visual editor for the configuration
- Add support for regional Simlish variants

## Example: Adding a New Song

To add translations for a new song:

1. **Add phrases** to `dictionary.phrases`:
```javascript
phrases: {
    'your new phrase': 'simlish translation',
}
```

2. **Add unique words** to `dictionary.songWords`:
```javascript
songWords: {
    'uniqueword': 'simlishword',
}
```

3. **Add rhymes** to `dictionary.rhymes`:
```javascript
rhymes: {
    'rhymeword1': 'rhymesim1',
    'rhymeword2': 'rhymesim2',
}
```

That's it! The translator will automatically use your new data.
