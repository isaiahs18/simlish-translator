/**
 * Simlish Phonetic Engine
 * Generates consistent Simlish words based on English phonetic patterns.
 * Rules derived from PHONETIC_RULES.md
 */
class PhoneticEngine {
    constructor() {
        this.vowelShifts = {
            'a': 'a',
            'e': 'i',
            'i': 'ee',
            'o': 'oo',
            'u': 'u'
        };

        this.suffixes = ['va', 'ip', 'ba', 'ur', 'ee'];
    }

    /**
     * Main transformation function
     * @param {string} word - English word to transform
     * @returns {string} - Generated Simlish word
     */
    generate(word) {
        if (!word) return '';

        // 1. Normalize
        const lower = word.toLowerCase();

        // 2. Handle specific consonant clusters first (greedy match)
        let processed = this.transformConsonants(lower);

        // 3. Apply vowel shifts
        processed = this.transformVowels(processed);

        // 4. Apply suffix if needed to match syllable count or style
        processed = this.applySuffix(processed, word);

        // 5. Ensure it sounds "Simlish" (cleanup)
        return this.cleanup(processed);
    }

    transformConsonants(word) {
        // Specific cluster transformations from rules
        let res = word;

        // Clusters
        res = res.replace(/st/g, 'sk');   // stomp -> skom
        res = res.replace(/tr/g, 'tur');  // tractor -> aptur
        res = res.replace(/ll/g, 'lv');   // fall -> falva

        // Single consonants (context aware ideally, but simple for now)
        // Only apply these if they aren't part of the clusters above
        // We use a simple replace for now, but might need to be careful not to double-replace

        // d -> n (body -> bana) - simplified rule
        // Only replace 'd' if it's in the middle of a word usually, but let's try global
        res = res.replace(/d/g, 'n');

        return res;
    }

    transformVowels(word) {
        let res = '';
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (this.vowelShifts[char]) {
                res += this.vowelShifts[char];
            } else {
                res += char;
            }
        }
        return res;
    }

    applySuffix(word, original) {
        // Simple heuristic: if word is short, add a suffix to give it that Simlish bounce
        // "fall" -> "falva"
        // "turn" -> "turnip"

        const lastChar = word[word.length - 1];
        const isVowel = 'aeiou'.includes(lastChar);

        // Deterministic suffix choice based on word length/char
        const seed = original.length;

        if (original.length <= 4 && !isVowel) {
            // Add a suffix
            const suffix = this.suffixes[seed % this.suffixes.length];
            return word + suffix;
        }

        // "body" -> "bana" (ends in vowel)
        if (original.endsWith('y')) {
            return word.slice(0, -1) + 'a'; // replace y with a
        }

        return word;
    }

    cleanup(word) {
        // Remove double vowels if they got too long?
        // For now, just return
        return word;
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PhoneticEngine;
} else {
    window.PhoneticEngine = PhoneticEngine;
}
