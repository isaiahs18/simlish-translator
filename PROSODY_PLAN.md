# Simlish Prosody & Rhythm Enhancement Plan

## Research Summary

Based on linguistic research into syllabic languages, song lyrics, and constructed languages, here are key principles for making Simlish flow better rhythmically:

### Key Concepts

#### 1. **Mora-Based Timing** (from Japanese)
- **Mora**: Smallest unit of timing in speech
- Short vowel = 1 mora, long vowel = 2 morae
- Makes rhythm predictable and song-like
- Japanese haiku uses 5-7-5 mora pattern

#### 2. **Stress Patterns** (from English poetry/songs)
- **Iambic** (da-DUM): unstressed-STRESSED - sounds like heartbeat
- **Trochaic** (DUM-da): STRESSED-unstressed - strong, driving rhythm
- Aligning word stress with musical beats = natural flow

#### 3. **Euphony** (from constructed languages)
- Open syllables (CV) sound flowing
- Nasals (m, n) and liquids (l, r) = smooth
- Avoid heavy consonant clusters
- Follow sonority hierarchy (sounds flow from edges to center)

## Proposed Enhancements for Simlish

### 1. **Syllable Weight System**
Assign "weight" to syllables for rhythm:

```javascript
syllableWeights: {
    light: ['ba', 'da', 'ga', 'na', 'ra'],      // 1 mora - quick
    medium: ['sul', 'dag', 'yib', 'neeb'],      // 1.5 morae - normal
    heavy: ['bloo', 'plerg', 'gweb', 'mesh']    // 2 morae - slow/emphasized
}
```

**Usage**: Match syllable weight to musical note duration
- Quarter note → light syllable
- Half note → heavy syllable

### 2. **Stress Pattern Matching**
Detect English word stress and preserve it:

```javascript
// Example: "beautiful" (BEAUtiful) = STRESSED-unstressed-unstressed
// Simlish: "BAHdana" = STRESSED-unstressed-unstressed
```

**Implementation**:
- Mark stressed syllables in dictionary
- Use heavier/more complex syllables for stressed positions
- Use lighter syllables for unstressed positions

### 3. **Phonotactic Flow Rules**

#### Consonant Cluster Avoidance
```javascript
flowRules: {
    avoidClusters: true,
    maxConsecutiveConsonants: 1,
    preferredPattern: 'CVCV' // consonant-vowel-consonant-vowel
}
```

#### Vowel Harmony
```javascript
vowelHarmony: {
    front: ['i', 'e'],  // Keep front vowels together
    back: ['o', 'u'],   // Keep back vowels together
    neutral: ['a']      // Can mix with either
}
```

### 4. **Line-End Rhythm**
For song lyrics, line endings should have consistent rhythm:

```javascript
lineEndPatterns: {
    // Last 2 syllables of each line should match pattern
    iambic: 'da-DUM',      // "away", "belong"
    trochaic: 'DUM-da',    // "happy", "running"
    spondee: 'DUM-DUM'     // "heartbreak", "moonlight"
}
```

### 5. **Mora Counting for Haiku-Style**
Enable mora-based line matching:

```javascript
// English: "The quick brown fox" (4 words, 4 syllables)
// Simlish: Match to 4 morae with varied syllable weights
// Result: "ah kwib bra fah" (4 morae, natural rhythm)
```

## Implementation Strategy

### Phase 1: Add Syllable Metadata
```javascript
const enhancedSyllables = {
    'ba': { weight: 1, stress: 'light', sonority: 'high' },
    'plerg': { weight: 2, stress: 'heavy', sonority: 'medium' },
    'sul': { weight: 1.5, stress: 'medium', sonority: 'high' }
}
```

### Phase 2: Stress Detection
```javascript
function detectStress(englishWord) {
    // Use dictionary of English stress patterns
    // "beautiful" → [1, 0, 0] (first syllable stressed)
    // "guitar" → [0, 1] (second syllable stressed)
}
```

### Phase 3: Rhythm Matching
```javascript
function matchRhythm(englishLine, stressPattern) {
    // Analyze English line's rhythm
    // Generate Simlish with matching stress pattern
    // Prefer syllables that match the stress level
}
```

### Phase 4: Flow Optimization
```javascript
function optimizeFlow(simlishWord) {
    // Check for harsh consonant clusters
    // Apply vowel harmony
    // Ensure smooth transitions between syllables
}
```

## Practical Examples

### Example 1: Iambic Rhythm (like heartbeat)
```
English:  "I LOVE to SING a SONG"
Pattern:  da-DUM da-DUM da-DUM
Simlish:  "yum MESH ta CHIB ah GURN"
Morae:    1-2    1-2    1-2
```

### Example 2: Trochaic Rhythm (strong start)
```
English:  "SHAKing UP the WORLD"
Pattern:  DUM-da DUM-da DUM
Simlish:  "SHER-ba TUR-na GWEB"
Morae:    2-1    2-1    2
```

### Example 3: Haiku-Style (5-7-5 morae)
```
English:  "The sun sets slowly" (5 syllables)
Simlish:  "ah sul dag bloo-na" (5 morae: 1+1+1+2 = 5)

English:  "Colors paint the evening sky" (7 syllables)
Simlish:  "gah-na pik ah feeb-na yib" (7 morae: 1+1+1+1+2+1 = 7)

English:  "Peace fills the air" (5 syllables)
Simlish:  "neeb mesh ah oo" (5 morae: 1+2+1+1 = 5)
```

## Benefits

✅ **Natural Flow**: Syllables match musical rhythm  
✅ **Singability**: Easier to sing along with songs  
✅ **Memorability**: Consistent patterns are easier to remember  
✅ **Euphony**: Sounds more pleasant and flowing  
✅ **Flexibility**: Can adapt to different musical styles  

## Next Steps

1. **Create syllable metadata** with weight/stress info
2. **Build English stress pattern dictionary** for common words
3. **Implement rhythm matching algorithm**
4. **Add flow optimization** (vowel harmony, cluster avoidance)
5. **Test with actual songs** to refine patterns

## Configuration Addition

Add to `simlish-config.js`:

```javascript
prosody: {
    enabled: true,
    
    // Syllable timing (morae)
    morae: {
        light: 1,    // Quick syllables
        medium: 1.5, // Normal syllables
        heavy: 2     // Emphasized syllables
    },
    
    // Stress patterns
    stressPatterns: {
        preferIambic: true,  // da-DUM (most natural in English)
        allowTrochaic: true, // DUM-da (for emphasis)
        avoidSpondee: false  // DUM-DUM (heavy, dramatic)
    },
    
    // Flow rules
    flow: {
        vowelHarmony: true,
        avoidClusters: true,
        preferOpenSyllables: true,
        maxConsonantCluster: 1
    },
    
    // Line-end matching
    lineEnds: {
        matchRhythm: true,
        consistentPattern: true
    }
}
```

This will make your Simlish translator create lyrics that flow naturally with songs and have a pleasing, rhythmic quality!
