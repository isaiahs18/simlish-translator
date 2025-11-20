# Case Sensitivity in the Translator - How It Works

## TL;DR: **You don't need to worry about case!** 

The translator automatically handles all cases. Here's how:

## How It Works

### 1. **Input is Converted to Lowercase**

When you type text, the translator immediately converts it to lowercase:

```javascript
let result = content.toLowerCase();  // Line 399 in script.js
```

**Example:**
- You type: `"I LOVE YOU"` or `"i love you"` or `"I Love You"`
- Translator sees: `"i love you"`
- All match the dictionary entry: `'i love you': 'meshaloob'`

### 2. **Dictionary Keys Are Lowercase**

All dictionary entries are stored in lowercase:

```javascript
simlishDictionary = {
    'i love you': 'meshaloob',      // ✅ lowercase
    'last friday night': 'lass frooby noop',  // ✅ lowercase
    'don\\'t cha': 'doba',           // ✅ lowercase
}
```

### 3. **Capitalization is Preserved in Output**

The translator remembers if a word was capitalized and preserves it:

```javascript
const wasCapitalized = /^[A-Z]/.test(word);  // Line 451

if (wasCapitalized && simlishWord.length > 0) {
    simlishWord = simlishWord.charAt(0).toUpperCase() + simlishWord.slice(1);
}
```

**Example:**
- Input: `"Hello"` → Output: `"Sul sul"` (capitalized)
- Input: `"hello"` → Output: `"sul sul"` (lowercase)

## What This Means for You

### ✅ **When Adding Phrases to Dictionary:**

**Always use lowercase:**
```javascript
// ✅ CORRECT
'last friday night': 'lass frooby noop',
'i love you': 'meshaloob',
'don\\'t cha': 'doba',

// ❌ WRONG - Don't do this
'Last Friday Night': 'lass frooby noop',  // Won't match!
'I Love You': 'meshaloob',                // Won't match!
```

### ✅ **When Typing in the Translator:**

**Use any case you want:**
```
"I love you" → meshaloob ✅
"i love you" → meshaloob ✅
"I LOVE YOU" → meshaloob ✅
"i LoVe YoU" → meshaloob ✅
```

All of these work perfectly!

### ✅ **Capitalization is Smart:**

```
Input: "Hello, I love you"
Output: "Sul sul, meshaloob yib"
        ↑ Capitalized because "Hello" was capitalized
```

## Examples

### Example 1: Song Lyrics
```
Input (any case):
"Last Friday Night"
"last friday night"
"LAST FRIDAY NIGHT"

All produce:
"Lass frooby noop"  (First letter capitalized because input was)
```

### Example 2: Sentences
```
Input: "I Love You So Much"
Output: "Por see gab lurv soo pik"
        ↑ Capitalized because "I" was capitalized
```

### Example 3: All Caps
```
Input: "I LOVE YOU"
Output: "Por see gab lurv"
        ↑ Only first letter capitalized (Simlish doesn't use all caps)
```

## Summary

**You only need to remember ONE thing:**

> **Always add dictionary entries in lowercase**

The translator handles everything else automatically! 🎵

---

## Quick Reference

| What You Type | Dictionary Entry | Output |
|--------------|------------------|---------|
| "I love you" | `'i love you': 'meshaloob'` | "Meshaloob" |
| "i love you" | `'i love you': 'meshaloob'` | "meshaloob" |
| "I LOVE YOU" | `'i love you': 'meshaloob'` | "Meshaloob" |
| "Last Friday Night" | `'last friday night': 'lass frooby noop'` | "Lass frooby noop" |

**Bottom line:** Type however you want, just keep dictionary entries lowercase! ✅
