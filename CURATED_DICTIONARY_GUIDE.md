# Curated Simlish Dictionary Guide

## How to Add Curated Words

The translator now prioritizes **curated dictionary words** over random generation. This means you can build an authentic Simlish vocabulary based on official songs!

### Current Curated Song Words

```javascript
// From "Country Girl (Shake It for Me)"
'honky': 'hurky',      // honky tonk → hurky durk
'tonk': 'durk',
'badonk': 'badurk',    // badonk a donk → badurk a durk  
'donk': 'durk',
'shake': 'sherb',
'girl': 'gurn',
'country': 'kuntry',
'got': 'gal',
'little': 'libba',
'boom': 'bloom',
'truck': 'turb',
'big': 'pik'
```

### How to Add More

1. **Listen to official Simlish songs** (Luke Bryan, Katy Perry, Black Eyed Peas, etc.)
2. **Compare to original English lyrics**
3. **Identify the Simlish words** used
4. **Add to dictionary** in `script.js`:

```javascript
// In the simlishDictionary object, add to the "Song-specific" section:
'yourword': 'simlishversion',
```

### Pattern Recognition Tips

**Phonetic Similarity:**
- "honky" → "hurky" (similar sounds, same syllables)
- "tonk" → "durk" (rhymes, matches rhythm)

**Syllable Matching:**
- Always match syllable count exactly
- "badonk" (2 syllables) → "badurk" (2 syllables)

**Funny Sounds:**
- Prioritize words that sound silly/playful
- Use hard consonants: k, b, d, g, r
- Mix vowels: u, a, o, ee

### Example Workflow

1. **Find official Simlish lyrics** (Genius.com, YouTube captions)
2. **Map English → Simlish:**
   ```
   English: "shake it for me girl"
   Simlish: "sherb ib fa mee gurn"
   
   Mappings found:
   shake → sherb
   it → ib
   for → fa
   me → mee
   girl → gurn
   ```

3. **Add to dictionary:**
   ```javascript
   'shake': 'sherb',
   'it': 'ib',
   'for': 'fa',
   'me': 'mee',
   'girl': 'gurn'
   ```

4. **Test it!** The translator will now use these curated words instead of generating random ones.

### Priority System

The translator checks in this order:
1. **Curated dictionary** (your custom mappings) ← **HIGHEST PRIORITY**
2. **Common Simlish words** (sul sul, dag dag, etc.)
3. **Random syllable generation** (fallback for unknown words)

This means the more curated words you add, the more authentic your translations become!

### Building Your Dictionary

**Start with common words:**
- Articles: a, the, an
- Pronouns: I, you, me, my, your
- Verbs: got, gonna, want, need, love
- Adjectives: big, little, good, bad

**Then add song-specific:**
- Genre words (country, rock, pop)
- Action words (shake, dance, move, jump)
- Descriptive words (hot, cold, fast, slow)

### Quick Reference: Official Simlish Songs

**Luke Bryan - "Country Girl"**
- Full lyrics available on Genius
- Great for country/southern vocabulary

**Katy Perry - "Hot N Cold"**
- Good for opposites and emotions

**Black Eyed Peas - "Let's Get It Started"**
- Party/energy vocabulary

**The Pussycat Dolls - "Don't Cha"**
- Flirty/playful words

---

## Current Dictionary Stats

- **Common Simlish:** 40 words
- **Song-specific curated:** 12 words
- **Total curated:** 52 words

**Goal:** Build to 200+ curated words for maximum authenticity!
