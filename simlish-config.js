// Simlish Language Configuration
// This file contains all the linguistic rules and data for the Simlish translator

const SimlishConfig = {
    // ===== PHONETIC RULES =====
    phonetics: {
        // Vowels used in Simlish (no 'y')
        vowels: 'aeiou',

        // Consonants used in Simlish
        consonants: 'bcdfghjklmnpqrstvwxyz',

        // Syllable structure rules
        syllableRules: {
            maxConsonantsInOnset: 2,
            maxConsonantsInCoda: 2,
            preferredWordLength: [1, 2], // 1-2 syllables preferred
        }
    },

    // ===== SYLLABLE POOLS =====
    syllables: {
        // Simple syllables for long words (3+ syllables)
        simple: [
            'ba', 'da', 'ga', 'na', 'ra', 'fa', 'ja', 'sha', 'in',
            'oo', 'ah', 'eh', 'oh', 'yib', 'neeb', 'gah', 'doo', 'pik'
        ],

        // Complex syllables for short words (1-2 syllables)
        complex: [
            'sul', 'dag', 'vad', 'ben', 'gweb', 'feeb', 'wab', 'deb',
            'hoo', 'noo', 'zee', 'zow', 'poa', 'cuh', 'fro', 'gee',
            'gal', 'lib', 'tur', 'nip', 'ber', 'mesh', 'bah',
            'bloo', 'blee', 'blay', 'snoo', 'woo', 'chib', 'loo', 'plerg',
            'chum', 'sno', 'nerb', 'turb', 'skom', 'bake', 'sher', 'kee', 'mur'
        ],

        // Consonant-based syllables (for 5+ letter words)
        // Maps second consonant to appropriate syllables
        byConsonant: {
            'b': ['bah', 'ben', 'bloo', 'blee', 'blay', 'bake'],
            'c': ['cuh', 'chib', 'chum'],
            'd': ['da', 'dag', 'deb', 'doo'],
            'f': ['fa', 'feeb', 'fro'],
            'g': ['ga', 'gah', 'gal', 'gee', 'gweb'],
            'h': ['hoo'],
            'j': ['ja'],
            'k': ['kee', 'skom'],
            'l': ['lib', 'loo'],
            'm': ['mesh', 'mur'],
            'n': ['na', 'neeb', 'noo', 'nip', 'nerb'],
            'p': ['pik', 'poa', 'plerg'],
            'r': ['ra', 'tur', 'turd', 'ber', 'sher'],
            's': ['sha', 'sul', 'sno', 'snoo', 'skom', 'sher'],
            't': ['tur', 'turb'],
            'v': ['vad'],
            'w': ['wab', 'woo'],
            'z': ['zee', 'zow']
        }
    },

    // ===== GRAMMAR RULES =====
    grammar: {
        // Rule: No single-letter words
        noSingleLetters: {
            enabled: true,
            fallback: 'ah' // Add this if word is 1 letter
        },

        // Rule: Plural handling
        plurals: {
            enabled: true,
            suffix: 's', // Just add 's' to base word
            checkDictionary: true // Check if base word is in dictionary first
        },

        // Rule: Possessive handling
        possessives: {
            enabled: true,
            addSyllable: true, // Add a syllable ending in 's'
            checkDictionary: true
        },

        // Rule: "The" article
        theArticle: {
            enabled: true,
            repeatPrevious: true, // Repeat previous word
            fallbackIfFirst: 'ah' // Use this if "the" is first word
        },

        // Rule: Contractions (don't, can't, etc.)
        contractions: {
            enabled: true,
            useFirstLetter: true, // Use first letter of previous word
            addSuffix: 'ah', // Add this to avoid single letters
            words: ["don't", "can't", "didn't", "won't"] // Won't has special handling
        },

        // Rule: Capitalization preservation
        capitalization: {
            enabled: true,
            preserveProperNouns: true
        },

        // Rule: Indentation preservation (for song lyrics)
        indentation: {
            enabled: true,
            preserveWhitespace: true
        }
    },

    // ===== CURATED DICTIONARY =====
    dictionary: {
        // Greetings & Common
        greetings: {
            'hello': 'sul sul',
            'hi': 'sul sul',
            'goodbye': 'dag dag',
            'bye': 'dag dag',
            'yes': 'yib',
            'no': 'neeb',
            'please': 'plerg',
            'thank you': 'vadish',
            'thanks': 'vadish',
            'sorry': 'oh feebee lay'
        },

        // Emotions
        emotions: {
            'love': 'meshaloob',
            'happy': 'ooh be gah',
            'sad': 'awasa poa',
            'angry': 'benzi chibna looble bazebni gweb',
            'excited': 'whippna choba dog'
        },

        // Questions
        questions: {
            'what': 'cuh',
            'why': 'za woka genava',
            'how': 'hooba noobie',
            'where': 'wabadebadoo',
            'when': 'geelfrob'
        },

        // Numbers
        numbers: {
            'one': 'neeb',
            'two': 'saa',
            'three': 'tul',
            'four': 'fol',
            'five': 'fibe'
        },

        // Phonetic phrases (multi-word, checked first)
        phrases: {
            'got a little boom in my big truck': 'gobba libba doo bi up smurp nurp',
            'gonna open up the doors and turn it up': 'gobba oobla do ba do ba turn up nurp',
            'turn it up': 'turn up nurp',
            'got a': 'gobba',
            'in my': 'bi up',
            'big truck': 'smurp nurp',
            'gonna open': 'gobba oobla',
            'open up': 'oobla do',
            'up the': 'ba do',
            'the doors': 'ba do',
            'and turn': 'ba turn',
            'doors and': 'do ba',
            'i love you': 'meshaloob',
            'how are you': 'hooba noobie',
            'good morning': 'sul sul',
            'good night': 'dag dag',
            'see you later': 'dag dag'
        },

        // Song-specific words
        songWords: {
            'honky': 'hurky',
            'tonk': 'durk',
            'badonkadonk': 'badurkadurk',
            'shake': ['sherb', 'sherber'], // Multiple options
            'girl': 'gurn',
            'country': 'kuntry',
            'got': 'gal',
            'little': 'libba',
            'boom': 'doo',
            'truck': 'turb',
            'big': 'pik',
            'ya': 'yib',
            'yea': 'yib',
            'it': ['ib', 'it'],
            'for': ['fa', 'fer'],
            'me': ['mee', 'mi'],
            'gotta': 'gabba',
            'gonna': 'gunna',
            'wanna': 'wabba',
            'every': 'eeburbee',
            'going': 'chumma',
            "i'm": 'yum',
            "won't": 'donk', // Special: not a contraction
            'the': 'THE_ARTICLE', // Special marker
            'slim': 'yim',
            'shady': 'yibby'
        },

        // Contractions (special handling)
        contractions: {
            "don't": 'CONTRACTION',
            "can't": 'CONTRACTION',
            "didn't": 'CONTRACTION'
        },

        // Rhyme families (manual rhymes)
        rhymes: {
            // -aker rhymes
            'maker': 'maka',
            'shaker': 'shaka',
            'taker': 'taka',
            'breaker': 'braka',

            // -oney rhymes
            'money': 'muni',
            'honey': 'huni',
            'funny': 'funi',
            'sunny': 'suni'
        },

        // Misc words
        misc: {
            'food': 'chumcha',
            'water': 'sploosh',
            'house': 'nooboo',
            'friend': 'boobasnot',
            'party': 'yibsy',
            'music': 'bing bang boom',
            'dance': 'snoogy woogy',
            'fun': 'yibsy',
            'awesome': 'whippna choba dog',
            'cool': 'zow zibby',
            'beautiful': 'ooh be gah'
        }
    },

    // ===== HELPER METHODS =====
    // Flatten dictionary for easy lookup
    getFlatDictionary() {
        const flat = {};
        Object.values(this.dictionary).forEach(category => {
            Object.assign(flat, category);
        });
        return flat;
    },

    // Get all syllables by type
    getSyllablePool(type) {
        if (type === 'simple') return this.syllables.simple;
        if (type === 'complex') return this.syllables.complex;
        return [...this.syllables.simple, ...this.syllables.complex];
    },

    // Get syllables for a specific consonant
    getSyllablesByConsonant(consonant) {
        return this.syllables.byConsonant[consonant] || null;
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimlishConfig;
}
