# SIMLISH PHONETIC TRANSFORMATION RULES

## Overview
Based on analysis of official Simlish songs, these are the consistent phonetic transformation patterns used to convert English to Simlish.

---

## Core Transformation Rules

### 1. **Vowel Shifts**
```
a → a/ah     (mostly preserved)
e → ee/i     (often raised: "every" → "ibby")
i → i/ee     (preserved or lengthened)
o → o/oo     (often preserved: "hood" → "hoo")
u → u/oo     (often preserved: "up" → "nerb" is exception)
```

### 2. **Consonant Transformations**

**Common Shifts:**
```
d → n/t      ("body" → "bana", "daddy" → "deedee")
t → p/t      ("tractor" → "aptur", "turn" → "turnip")
k → k/g      (mostly preserved)
b → b/p      (mostly preserved)
v → v/f      (preserved: "love" → "luv")
```

**Consonant Clusters:**
```
st → sk      ("stomp" → "skom")
tr → tr/tur  ("tractor" → "aptur")
ll → lv/l    ("fall" → "falva")
```

### 3. **Suffix Patterns**

**Common Simlish Suffixes:**
```
-a/-ah       ("fall" → "falva", "gonna" → "yibba")
-ip/-op      ("turn" → "turnip", "get" → "gidop")
-ee/-y       ("daddy" → "deedee", "every" → "ibby")
-er/-ur      ("tractor" → "aptur")
-ba/-pa      ("body" → "bana", "everybody" → "ibby bana")
```

### 4. **Word Compression**

**Multi-syllable → Fewer Syllables:**
```
"everybody" → "ibby bana" (4 → 4, but simplified)
"gonna" → "yibba" (2 → 2, vowel shift)
"get up" → "gidop" (2 words → 1 word)
```

---

## Syllable Matching Rules

### Rule 1: Preserve Syllable Count
```
English: "fall in love" (3 syllables)
Simlish: "fal-va luv" (3 syllables) ✓
```

### Rule 2: Maintain Stress Patterns
```
English: FALL in LOVE (stress on 1st and 3rd)
Simlish: FAL-va LUV (same stress) ✓
```

---

## Phoneme Mapping Table

| English Sound | Simlish Equivalent | Examples |
|--------------|-------------------|----------|
| /ɔː/ (fall) | /a/ or /al-va/ | fall → falva |
| /ʌ/ (love, up) | /u/ or /er/ | love → luv, up → nerb |
| /ɜː/ (turn) | /ur-ip/ | turn → turnip |
| /ʊ/ (hood) | /oo/ | hood → hoo |
| /æ/ (daddy) | /ee/ | daddy → deedee |
| /ɛ/ (every) | /i/ | every → ibby |

---

## Transformation Algorithm

### Step 1: Identify Base Sound
```javascript
const word = "fall";
const baseSound = identifyVowelSound(word); // /ɔː/
```

### Step 2: Apply Vowel Shift
```javascript
const shifted = applyVowelShift(baseSound); // /a/
```

### Step 3: Add Simlish Suffix (if applicable)
```javascript
const withSuffix = addSimlishSuffix(shifted, word); // "fal" + "va"
```

### Step 4: Apply Consonant Transformations
```javascript
const final = transformConsonants(withSuffix); // "falva"
```

---

## Consistency Rules

### Rule 1: Same Root = Same Translation
```
"love" always → "luv" (in any context)
"fall" always → "falva" (when standalone)
"turn" always → "turnip" (when standalone)
```

### Rule 2: Compound Words
```
"fall in love" = "falva" + "in" + "luv"
"turn it up" = "turnip" + "it" + "nerb"
```

### Rule 3: Contextual Variations
```
Standalone: "up" → "nerb"
In phrase: "get up" → "gidop" (merged)
```

---

## Implementation Strategy

### 1. Build Root Word Dictionary
```javascript
const rootWords = {
    "fall": "falva",
    "love": "luv",
    "turn": "turnip",
    "up": "nerb",
    "every": "ibby",
    "body": "bana"
};
```

### 2. Create Transformation Functions
```javascript
function transformVowel(vowel) {
    const shifts = {
        'a': 'a',
        'e': 'i',
        'i': 'ee',
        'o': 'oo',
        'u': 'u'
    };
    return shifts[vowel] || vowel;
}

function addSuffix(word, syllableCount) {
    const suffixes = ['a', 'ip', 'ba', 'ur', 'ee'];
    // Logic to choose appropriate suffix
}
```

### 3. Apply Consistently
```javascript
function translateWord(english) {
    // Check root dictionary first
    if (rootWords[english]) return rootWords[english];
    
    // Apply transformation rules
    return applyPhoneticRules(english);
}
```

---

## Pattern Recognition from Your Examples

### Pattern 1: Verb Transformations
```
"fall" → "falva" (add -va suffix)
"turn" → "turnip" (add -ip suffix)
"stomp" → "skom" (st→sk, drop p)
```

### Pattern 2: Noun Transformations
```
"love" → "luv" (simplify)
"body" → "bana" (d→n, y→a)
"tractor" → "aptur" (tr→tur, or→ur)
```

### Pattern 3: Adverb/Particle Transformations
```
"up" → "nerb" (complete phonetic shift)
"in" → "in" (preserved)
"it" → "it" (preserved in some contexts)
```

---

## Next Steps for Implementation

1. **Extract all root words** from transcribed songs
2. **Identify transformation patterns** for each word type
3. **Build phonetic rule engine** in JavaScript
4. **Create consistency checker** to validate new translations
5. **Auto-suggest Simlish** based on phonetic rules

---

## Benefits of This System

✅ **Consistency** - Same English word always translates the same way
✅ **Predictability** - New words follow established patterns  
✅ **Authenticity** - Based on official Simlish songs
✅ **Scalability** - Easy to add new rules as more songs are transcribed
✅ **Validation** - Can check if transcriptions follow patterns

---

## Example Application

**Input:** "I want to dance"

**Step 1:** Break into words: ["I", "want", "to", "dance"]

**Step 2:** Check root dictionary:
- "I" → "yob" (from dictionary)
- "want" → apply rules → "wanta"
- "to" → "to" (preserved)
- "dance" → "densh" (from dictionary)

**Output:** "yob wanta to densh"

**Verify syllables:** 5 → 5 ✓
**Verify stress:** i WANT to DANCE → yob WAN-ta to DENSH ✓
