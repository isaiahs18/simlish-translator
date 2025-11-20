/**
 * Simlish Translator Core - Optimized translation logic
 * Data is loaded separately via DataLoader for better performance
 */
class SimlishTranslator {
    constructor(dictionary, contextualPhrases, semanticCategories, phoneticEngine) {
        this.dictionary = dictionary.phrases || {};
        this.fallbackSynonyms = dictionary.fallbackSynonyms || {};
        this.contextualPhrases = contextualPhrases || {};
        this.semanticCategories = semanticCategories || {};
        this.phoneticEngine = phoneticEngine;
    }

    /**
     * Main translation function
     * @param {string} text - English text to translate
     * @returns {string} Simlish translation
     */
    translate(text) {
        if (!text.trim()) return '';

        const lines = text.split('\n');
        const translatedLines = lines.map(line => this.translateLine(line));
        return translatedLines.join('\n');
    }

    /**
     * Translate a single line
     */
    translateLine(line) {
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : '';
        const content = line.slice(indent.length);

        if (!content.trim()) return line;

        let result = content.toLowerCase();

        // Step 1: Process context-aware phrases
        result = this.processContextualPhrases(result);

        // Step 2: Dictionary lookup (sorted by length)
        const sortedEntries = Object.entries(this.dictionary).sort((a, b) => b[0].length - a[0].length);

        for (const [english, simlish] of sortedEntries) {
            if (this.contextualPhrases[english]) continue; // Skip if already processed

            const startBoundary = /^\w/.test(english) ? '\\b' : '';
            const endBoundary = /\w$/.test(english) ? '\\b' : '';
            const escapedEnglish = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(startBoundary + escapedEnglish + endBoundary, 'gi');
            const translation = Array.isArray(simlish) ? simlish[0] : simlish;
            const safeTranslation = translation.replace(/\s+/g, '_');
            result = result.replace(regex, `[[${safeTranslation}]]`);
        }

        // Step 3: Translate remaining words
        result = result.split(/\s+/).map(word => this.translateWord(word)).join(' ');

        return indent + result;
    }

    /**
     * Process contextual phrases with scoring
     */
    processContextualPhrases(text) {
        const words = text.split(/\s+/);
        const contextualKeys = Object.keys(this.contextualPhrases).sort((a, b) => b.length - a.length);

        for (const phrase of contextualKeys) {
            const variants = this.contextualPhrases[phrase];
            const startBoundary = /^\w/.test(phrase) ? '\\b' : '';
            const endBoundary = /\w$/.test(phrase) ? '\\b' : '';
            const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(startBoundary + escapedPhrase + endBoundary, 'gi');

            if (regex.test(text)) {
                let bestVariant = variants[0];
                let bestScore = 0;

                for (const variant of variants) {
                    let score = variant.weight || 1.0;
                    for (const contextWord of variant.context) {
                        if (words.includes(contextWord.toLowerCase())) {
                            score += 0.5;
                        }
                    }
                    if (score > bestScore) {
                        bestScore = score;
                        bestVariant = variant;
                    }
                }

                const safeTranslation = bestVariant.simlish.replace(/\s+/g, '_');
                text = text.replace(regex, `[[${safeTranslation}]]`);
            }
        }

        return text;
    }

    /**
     * Translate a single word
     */
    translateWord(word) {
        if (word.includes('[[')) {
            return word.replace(/\[\[(.*?)\]\]/g, (match, p1) => p1.replace(/_/g, ' '));
        }

        const match = word.match(/^([^a-z']*)([a-z']+)([^a-z']*)$/i);
        if (!match) return word;

        const [, prefix, cleanWord, suffix] = match;
        const wasCapitalized = /^[A-Z]/.test(word);
        const lowerWord = cleanWord.toLowerCase();

        let simlishWord;

        // Check fallback synonyms
        if (this.fallbackSynonyms[lowerWord]) {
            simlishWord = this.fallbackSynonyms[lowerWord];
        } else {
            // Check semantic categories
            const semanticMatch = this.findSemanticMatch(cleanWord);
            if (semanticMatch) {
                simlishWord = semanticMatch;
            } else {
                // Check compound word derivation (Reverse Lookup)
                const compoundMatch = this.findCompoundMatch(cleanWord);
                if (compoundMatch) {
                    simlishWord = compoundMatch;
                } else {
                    // Use predictive phonetic engine
                    simlishWord = this.predictiveTranslate(cleanWord);
                }
            }
        }

        if (wasCapitalized && simlishWord.length > 0) {
            simlishWord = simlishWord.charAt(0).toUpperCase() + simlishWord.slice(1);
        }

        return prefix + simlishWord + suffix;
    }

    /**
     * Find semantic category match
     */
    findSemanticMatch(word) {
        const lowerWord = word.toLowerCase();
        for (const [category, data] of Object.entries(this.semanticCategories)) {
            if (data.words && data.words.includes(lowerWord)) {
                return data.simlish;
            }
        }
        return null;
    }

    /**
     * Find compound match (Reverse Lookup)
     * Derives a word from a larger dictionary entry (e.g., "fish" from "catfish")
     */
    findCompoundMatch(word) {
        const lowerWord = word.toLowerCase();
        if (lowerWord.length < 3) return null; // Too short for reliable derivation

        // Iterate through dictionary to find a container word
        for (const [english, simlish] of Object.entries(this.dictionary)) {
            // Skip if the word IS the key (should have been caught earlier)
            if (english === lowerWord) continue;

            const index = english.indexOf(lowerWord);
            if (index !== -1) {
                // Found a compound container!
                // Heuristic: Map the position linearly to the Simlish word

                // "catfish" (7) -> "googlix" (7)
                // "fish" is at index 3, length 4

                const englishLen = english.length;
                const simlishLen = simlish.length;

                // Calculate relative start and end positions
                const startRatio = index / englishLen;
                const endRatio = (index + lowerWord.length) / englishLen;

                const startPos = Math.floor(startRatio * simlishLen);
                const endPos = Math.ceil(endRatio * simlishLen);

                let derived = simlish.slice(startPos, endPos);

                // Cleanup: Ensure it has vowels, isn't too short
                if (derived.length >= 2) {
                    return derived;
                }
            }
        }
        return null;
    }

    /**
     * Predictive translation based on phonetic rules
     * @param {string} word - English word to translate
     */
    predictiveTranslate(word) {
        if (this.phoneticEngine) {
            return this.phoneticEngine.generate(word);
        }

        // Fallback if engine not loaded (shouldn't happen if setup correctly)
        return word;
    }

    /**
     * Simple hash function for deterministic generation
     */
    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    }
}

// Export for use
window.SimlishTranslator = SimlishTranslator;

