# Official Simlish Language Research

## Summary of Findings

Based on research into EA/Maxis's official Simlish language, here's what we know about its structure and how songs are created.

## Language Structure

### Core Design Philosophy
- **Created by**: Will Wright (1996 for SimCopter, popularized in The Sims 2000)
- **Purpose**: Avoid repetitive dialogue, no need for translations, allow emotional interpretation
- **Nature**: Largely improvisational "gibberish" with emotional nuance

### Phonetic System

#### Confirmed Rules:
1. **Consonant-Vowel-Consonant (CVC) Pattern**
   - Simlish syllables frequently follow CVC structure
   - Example: "Sul Sul", "Dag Dag", "Neeb"

2. **Syllable Structure**: Maximally CCVCC
   - Up to 2 consonants in onset
   - Up to 2 consonants in coda
   - Simpler than English (which allows up to 3 onset, 4-5 coda)

3. **Phonetic Influences**:
   - Based primarily on American English sounds
   - **Lacks**: Dental fricatives (no "th" sounds like in "thin" or "the")
   - **Has**: Consonant + /w/ clusters
   - **Has**: More words starting with glides (can sound like "baby talk")

4. **Reduplication** (Very Important!)
   - Common feature: repeating words or syllables
   - Examples: "Sul Sul", "Dag Dag", "Yibsy"
   - This is a productive grammatical feature

### Grammar

#### Official Statement:
- **No formal grammar rules** for complex sentences
- **No official comprehensive dictionary** (EA has internal one for songs)
- **Emphasis on**: Emotional expression over literal meaning
- **Interpretation**: Through tone, body language, context

#### Confirmed Patterns:
- Reduplication is grammatically significant
- Intonation and rhythm convey emotion
- Context-dependent meanings

## Official Translations

### Confirmed by EA/Maxis:

#### Greetings:
- **Sul Sul** = Hello / Goodbye
- **Dag Dag** = Goodbye
- **Hooba Noobie** = What's up? / How are you?
- **Geelfrob** = Nice to see you! (can be flirty)

#### Basic Words:
- **Yibs / Yibsy** = Yes
- **Neeb** = No
- **Nooboo** = Baby (officially confirmed!)
- **Chumcha** = Pizza / Food
- **Vadish** = Thank you
- **Shpansa** = Cheers

#### Expressions:
- **Whippna Choba Dog** = This is cool! / Nice car!
- **Wabadebadoo** = I'm on fire!
- **Fleny Fleny** = I'm so frustrated!
- **My Gerbits** = Oh my god!
- **Shoo Flee** = What's wrong?! / Help me!
- **Boobasnot** = I don't like you
- **Za Woka Genava** = I think you're hot!
- **Wohoo** = (intimacy/celebration)

#### Needs:
- **Oh Feebee Lay / Ah, Za Ving** = I'm hungry!
- **Awasa Poa** = I'm bored
- **Atohteh** = Eureka! / I need the bathroom!

## How Sims 3 Pets Country Songs Were Made

### Recording Process:

1. **Artist Selection**
   - Real artists approached to re-record their songs
   - Examples: Luke Bryan ("Country Girl"), Martina McBride ("Teenage Daughters")

2. **Lyric Preparation**
   - **NOT improvised** for songs (unlike dialogue)
   - Artists receive **phonetic Simlish lyric sheets**
   - Example: Pixie Lott confirmed she got a sheet for "Mama Do"

3. **Recording**
   - Artists follow prepared Simlish "lyrics"
   - Goal: Retain feel of original while fitting Simlish sound
   - Audio director Robi Kauker: "Singers enjoy the process"

4. **Production**
   - High-quality production (like full album)
   - Extensive variety to prevent repetition
   - Focus on emotional conveyance over literal meaning

### Key Insight:
**Songs use a prepared Simlish script**, not pure improvisation. EA has an internal dictionary/system for translating songs that is NOT public.

## Implications for Your Translator

### What We Can Apply:

#### 1. **Syllable Structure**
✅ Already doing: CVC patterns in syllable pools
✅ Should add: CCVCC maximum structure enforcement

#### 2. **Reduplication**
✅ Already have: "Sul Sul", "Dag Dag"
🔧 **Should add**: Automatic reduplication for greetings/emphasis
```javascript
reduplication: {
    greetings: true,    // "hello" → "sul sul"
    emphasis: true,     // "very happy" → "gah gah"
    farewells: true     // "goodbye" → "dag dag"
}
```

#### 3. **Phonetic Constraints**
🔧 **Should add**: 
- Avoid "th" sounds (not in Simlish)
- Prefer glides at word starts (w, y)
- Allow consonant + /w/ clusters

#### 4. **Emotional Tone**
🔧 **Should add**: Context markers
```javascript
context: {
    greeting: 'sul sul',
    farewell: 'dag dag',
    excitement: 'whippna choba dog',
    frustration: 'fleny fleny',
    hunger: 'chumcha'
}
```

#### 5. **Song Translation**
✅ Already doing: Syllable matching
✅ Already doing: Phonetic phrase mapping
🔧 **Should add**: Prepared "lyric sheets" for common songs

## Recommended Updates

### 1. Add Reduplication Rule
```javascript
grammar: {
    reduplication: {
        enabled: true,
        categories: ['greetings', 'farewells', 'emphasis'],
        pattern: 'double' // repeat entire word
    }
}
```

### 2. Expand Official Dictionary
Use confirmed translations:
```javascript
official: {
    'hello': 'sul sul',
    'goodbye': 'dag dag',
    'yes': 'yibs',
    'no': 'neeb',
    'baby': 'nooboo',
    'pizza': 'chumcha',
    'thank you': 'vadish',
    'cool': 'whippna choba dog',
    'frustrated': 'fleny fleny',
    'bored': 'awasa poa'
}
```

### 3. Add Phonetic Constraints
```javascript
phonetics: {
    avoid: ['th', 'ð'],  // No "th" sounds
    prefer: {
        onset: ['w', 'y', 'h'],  // Glides
        clusters: ['kw', 'gw', 'sw']  // Consonant + w
    }
}
```

### 4. Context-Based Translation
```javascript
contextual: {
    'on fire': 'wabadebadoo',
    'whats wrong': 'shoo flee',
    'oh my god': 'my gerbits',
    'im hungry': 'oh feebee lay',
    'youre hot': 'za woka genava'
}
```

## Sources

- EA/Maxis official statements
- Voice actor interviews (Pixie Lott, others)
- Audio director Robi Kauker interviews
- Fan-compiled dictionaries (cross-referenced with official confirmations)
- Linguistic analysis of Simlish phonetics

## Conclusion

Simlish is **more structured than it appears**:
- Consistent phonetic rules (CVC, CCVCC, no "th")
- Productive reduplication
- Context-dependent meanings
- **Songs use prepared scripts** (not improvised)

Your translator is on the right track! Adding reduplication, phonetic constraints, and official translations will make it even more authentic.
