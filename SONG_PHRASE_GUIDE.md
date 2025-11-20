# Song Phrase Addition Guide

## How to Add Song Phrases

When you find official Simlish lyrics from YouTube captions or other sources, add them to `script.js` in the `simlishDictionary` object.

### Format

```javascript
simlishDictionary = {
    // Song Name - Artist
    'english phrase': 'simlish translation',
    'another phrase': 'simlish version',
    
    // ... more phrases
}
```

### Important Rules

1. **Longest phrases first** - The translator already sorts by length, so add complete phrases before shorter ones
2. **Use lowercase** - All dictionary keys should be lowercase
3. **Preserve apostrophes** - Keep contractions like "don't", "you're", etc.
4. **Group by song** - Add comments to organize phrases by song

### Example: Adding a New Song

```javascript
// Katy Perry - Last Friday Night
'last friday night': 'lass frooby noop',
'think we kissed': 'yarby dansel dabel doops',
'maxed my credit card': 'meksa crabit car',
```

## Popular Songs to Prioritize

Based on Billboard chart performance, prioritize these songs:

### Top Priority (Billboard Top 10 Hits)
1. **Katy Perry - "Last Friday Night"** - #1 Billboard Hot 100
2. **Katy Perry - "Hot N Cold"** - #3 Billboard Hot 100
3. **Fun. - "We Are Young"** - #1 Billboard Hot 100
4. **Carly Rae Jepsen - "Run Away With Me"** - Popular single
5. **Paramore - "Pressure"** - Rock chart hit

### High Priority (Billboard Top 40)
6. **Nelly - "Hot in Herre"** - #1 Billboard Hot 100 (already has phrases ✅)
7. **Pussycat Dolls - "Don't Cha"** - #2 Billboard Hot 100 (already has phrases ✅)
8. **Luke Bryan - "Country Girl (Shake It)"** - #1 Country (already has phrases ✅)
9. **Lily Allen - "Smile"** - UK #1 (already has phrases ✅)
10. **Natasha Bedingfield - "Pocket Full of Sunshine"** - Top 5 hit

### Medium Priority (Popular in Sims Community)
11. **My Chemical Romance - "Na Na Na"**
12. **Neon Trees - "Animal"**
13. **Of Monsters And Men - "Little Talks"**
14. **Glass Animals - "Tangerine"**
15. **Japanese Breakfast - "Be Sweet"**

## Where to Find Official Simlish Lyrics

1. **YouTube** - Search "[Song Name] Simlish lyrics" - many have captions
2. **Sims Wiki** - Sometimes has transcriptions
3. **Community Forums** - Reddit r/thesims, Sims Forums
4. **Lyric Sites** - AZLyrics.biz sometimes has Simlish versions

## Quick Reference: Phrases Already Added

### ✅ Complete Songs
- **Lily Allen "Smile"** - 5 complete phrases
- **Pussycat Dolls "Don't Cha"** - 2 complete phrases  
- **Luke Bryan "Country Girl"** - 2 complete phrases

### ⚠️ Partial Coverage
- **Nelly "Hot in Herre"** - 10+ words, needs phrases
- **Katy Perry songs** - 15+ words, needs phrases

### ❌ Needs Addition
- Most other 200+ songs - only have individual words from semantic categories

## Tips for Accurate Transcription

1. **Listen multiple times** - Simlish can be hard to hear
2. **Check community consensus** - Compare multiple sources
3. **Preserve syllable count** - Simlish matches English syllables
4. **Watch official videos** - EA sometimes releases official versions
5. **Use captions** - YouTube auto-captions often work for Simlish

## Example Workflow

1. Find song on YouTube: "Katy Perry Last Friday Night Simlish"
2. Enable captions/subtitles
3. Pause and transcribe phrases
4. Add to `script.js` dictionary
5. Test in translator
6. Verify output matches official version

---

**Remember:** The translator already handles context-aware matching and semantic categories. You just need to add the specific phrase mappings!
