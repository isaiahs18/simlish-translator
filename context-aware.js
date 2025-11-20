// Context-Aware Translation Module for Simlish Translator
// ========================================================
// This module provides context-aware translation capabilities
// Usage: Include this file AFTER script.js in your HTML

// Contextual phrases - phrases with multiple valid Simlish translations
// The translator picks the best variant based on nearby words
const contextualPhrases = {
    'i love you': [
        {
            simlish: 'por see gab lurv',
            context: ['so', 'much', 'really', 'truly', 'deeply', 'forever', 'always'],
            weight: 1.5  // Formal/romantic context
        },
        {
            simlish: 'meshaloob',
            context: ['baby', 'babe', 'honey', 'darling', 'sweetie', 'dear'],
            weight: 1.2  // Casual/affectionate context
        },
        {
            simlish: 'jadosi',
            context: ['this', 'that', 'it', 'everything', 'all', 'too'],
            weight: 0.8  // "Love this/that" context
        }
    ],
    'love': [
        {
            simlish: 'meshaloob',
            context: ['i', 'you', 'we', 'my', 'your', 'our', 'me'],
            weight: 1.5  // Romantic love
        },
        {
            simlish: 'jadosi',
            context: ['this', 'that', 'it', 'song', 'music', 'place'],
            weight: 1.0  // Love for things
        }
    ],
    'hot': [
        {
            simlish: 'hotta',
            context: ['temperature', 'weather', 'sun', 'fire', 'burning', 'warm'],
            weight: 1.2  // Temperature context
        },
        {
            simlish: 'haspa',
            context: ['look', 'looking', 'sexy', 'attractive', 'gorgeous', 'beautiful'],
            weight: 1.5  // Attractive context
        },
        {
            simlish: 'fliblia',
            context: ['trending', 'popular', 'new', 'fresh', 'amazing'],
            weight: 1.0  // Slang "fire" context
        }
    ],
    'cool': [
        {
            simlish: 'colda',
            context: ['temperature', 'weather', 'ice', 'cold', 'freezing'],
            weight: 1.2  // Temperature context
        },
        {
            simlish: 'zow zibby',
            context: ['awesome', 'nice', 'great', 'amazing', 'sweet'],
            weight: 1.5  // Awesome context
        }
    ],
    'fire': [
        {
            simlish: 'fliblia',
            context: ['burning', 'flame', 'smoke', 'heat', 'hot'],
            weight: 1.5  // Literal fire
        },
        {
            simlish: 'zep tor maboo',
            context: ['amazing', 'awesome', 'incredible', 'sick', 'dope'],
            weight: 1.2  // Slang "fire" (amazing)
        }
    ],
    'sick': [
        {
            simlish: 'awasa poa',
            context: ['ill', 'unwell', 'doctor', 'medicine', 'hospital', 'fever'],
            weight: 1.5  // Illness context
        },
        {
            simlish: 'whippna choba dog',
            context: ['awesome', 'amazing', 'cool', 'dope', 'incredible'],
            weight: 1.2  // Slang "sick" (awesome)
        }
    ],
    'dance': [
        {
            simlish: 'snoogy woogy',
            context: ['party', 'club', 'music', 'fun', 'dancing'],
            weight: 1.5  // Party/casual dance
        },
        {
            simlish: 'densh',
            context: ['floor', 'move', 'body', 'rhythm', 'beat'],
            weight: 1.2  // Formal/action dance
        }
    ]
};

// Semantic Categories - Concept-based translation
// Groups words by meaning for more authentic translations
const semanticCategories = {
    // Actions - Movement
    movement: {
        simlish: 'zooma',
        words: ['walk', 'run', 'move', 'go', 'travel', 'walking', 'running', 'moving', 'going', 'traveling']
    },

    // Actions - Communication
    communication: {
        simlish: 'yabba',
        words: ['talk', 'speak', 'say', 'tell', 'chat', 'talking', 'speaking', 'saying', 'telling', 'chatting']
    },

    // Actions - Copying/Mimicking
    copying: {
        simlish: 'copyba',
        words: ['imitate', 'copy', 'mimic', 'imitating', 'copying', 'mimicking', 'impersonate', 'impersonating']
    },

    // Actions - Eating
    eating: {
        simlish: 'nomnom',
        words: ['eat', 'consume', 'devour', 'munch', 'eating', 'consuming', 'devouring', 'munching']
    },

    // Actions - Drinking
    drinking: {
        simlish: 'sploosh',
        words: ['drink', 'sip', 'gulp', 'chug', 'drinking', 'sipping', 'gulping', 'chugging']
    },

    // Actions - Sleeping
    sleeping: {
        simlish: 'slerp',
        words: ['sleep', 'rest', 'nap', 'doze', 'sleeping', 'resting', 'napping', 'dozing', 'snooze', 'snoozing']
    },

    // Actions - Working
    working: {
        simlish: 'worka',
        words: ['work', 'labor', 'toil', 'working', 'laboring', 'toiling']
    },

    // Actions - Playing
    playing: {
        simlish: 'yibsy',
        words: ['play', 'game', 'playing', 'gaming']
    },

    // Actions - Singing
    singing: {
        simlish: 'la la',
        words: ['sing', 'hum', 'croon', 'singing', 'humming', 'crooning']
    },

    // Emotions - Happiness
    happiness: {
        simlish: 'ooh be gah',
        words: ['happy', 'joyful', 'glad', 'cheerful', 'delighted', 'joyous']
    },

    // Emotions - Sadness
    sadness: {
        simlish: 'awasa poa',
        words: ['sad', 'unhappy', 'depressed', 'down', 'blue', 'melancholy']
    },

    // Emotions - Anger
    anger: {
        simlish: 'benzi chibna looble',
        words: ['angry', 'mad', 'furious', 'upset', 'irritated', 'annoyed']
    },

    // Emotions - Fear
    fear: {
        simlish: 'feebee',
        words: ['scared', 'afraid', 'frightened', 'terrified', 'fearful']
    },

    // Emotions - Excitement
    excitement: {
        simlish: 'whippna choba dog',
        words: ['excited', 'thrilled', 'pumped', 'hyped', 'stoked']
    },

    // States - Hunger
    hunger: {
        simlish: 'chumcha',
        words: ['hungry', 'starving', 'famished', 'peckish', 'ravenous']
    },

    // States - Thirst
    thirst: {
        simlish: 'sploosh',
        words: ['thirsty', 'parched', 'dehydrated']
    },

    // States - Tiredness
    tiredness: {
        simlish: 'slerp',
        words: ['tired', 'exhausted', 'sleepy', 'weary', 'fatigued', 'drowsy']
    },

    // States - Health
    health: {
        simlish: 'ooh be gah',
        words: ['healthy', 'well', 'fit', 'strong']
    }
};

// Context-aware translation function
// This processes contextual phrases BEFORE the regular dictionary lookup
function processContextualPhrases(text) {
    let result = text.toLowerCase();
    const words = result.split(/\s+/);

    // Process contextual phrases (longest to shortest)
    const contextualKeys = Object.keys(contextualPhrases).sort((a, b) => b.length - a.length);

    for (const phrase of contextualKeys) {
        const variants = contextualPhrases[phrase];
        const startBoundary = /^\w/.test(phrase) ? '\\b' : '';
        const endBoundary = /\w$/.test(phrase) ? '\\b' : '';
        const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(startBoundary + escapedPhrase + endBoundary, 'gi');

        if (regex.test(result)) {
            // Find the best variant based on context
            let bestVariant = variants[0]; // default to first
            let bestScore = 0;

            for (const variant of variants) {
                let score = variant.weight || 1.0;

                // Check how many context words appear nearby
                for (const contextWord of variant.context) {
                    if (words.includes(contextWord.toLowerCase())) {
                        score += 0.5; // boost score for each matching context word
                    }
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestVariant = variant;
                }
            }

            const safeTranslation = bestVariant.simlish.replace(/\s+/g, '_');
            result = result.replace(regex, `[[${safeTranslation}]]`);
        }
    }

    return result;
}

// Semantic matching function
// Checks if a word belongs to any semantic category
function findSemanticMatch(word) {
    const lowerWord = word.toLowerCase();
    for (const [category, data] of Object.entries(semanticCategories)) {
        if (data.words.includes(lowerWord)) {
            return data.simlish;
        }
    }
    return null; // No semantic match found
}

// To integrate this module:
// 1. Include this file in your HTML: <script src="context-aware.js"></script>
// 2. The translateToSimlish() function in script.js already calls processContextualPhrases()
// 3. For semantic matching, script.js will call findSemanticMatch() during translation
// 4. Integration is automatic - just ensure this file loads before script.js

console.log('Context-aware translation module loaded! 🎯');
console.log(`- ${Object.keys(contextualPhrases).length} contextual phrases loaded`);
console.log(`- ${Object.keys(semanticCategories).length} semantic categories loaded`);

