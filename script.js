// Simlish Translator - Main JavaScript

// Simlish Dictionary (Common words and phrases)
const simlishDictionary = {
    // === NEW CONFIRMED WORDS (from official sources) ===
    'cheers': 'shpansa',
    'marry me': 'vanu marsha ma',
    'will you marry me': 'vanu marsha ma',
    'wedding': 'noobtia',
    'great idea': 'ah gwanda blitz',
    'i think you\'re hot': 'za woka genava',
    'i love you': 'por see gab lurv',
    'when\'s lunch': 'vens unch',
    'good day': 'maladai',
    'this is cool': 'whippna choba dog',

    // Greetings
    'hello': 'sul sul',
    'hi': 'sul sul',
    'goodbye': 'dag dag',
    'bye': 'dag dag',

    // Common words
    'yes': 'yibs',
    'no': 'neib',
    'please': 'plerg',
    'thank you': 'vadish',
    'thanks': 'vadish',
    'sorry': 'oh feebee lay',

    // Emotions
    'love': 'meshaloob',
    'happy': 'ooh be gah',
    'sad': 'awasa poa',
    'angry': 'benzi chibna looble bazebni gweb',
    'excited': 'whippna choba dog',

    // Questions
    'what': 'cuh',
    'why': 'za woka genava',
    'how': 'hooba noobie',
    'where': 'wabadebadoo',
    'when': 'geelfrob',

    // Common phrases
    'i love you': 'meshaloob',
    'how are you': 'hooba noobie',
    'good morning': 'sul sul',
    'good night': 'dag dag',
    'see you later': 'dag dag',

    // Numbers
    'one': 'neeb',
    'two': 'saa',
    'three': 'tul',
    'four': 'fol',
    'five': 'fibe',

    // Misc
    'food': 'chumcha',
    'water': 'sploosh',
    'house': 'nooboo',
    'baby': 'nooboo',
    'friend': 'boobasnot',
    'party': 'yibsy',
    'music': 'bing bang boom',
    'dance': 'snoogy woogy',
    'fun': 'yibsy',
    'awesome': 'whippna choba dog',
    'cool': 'zow zibby',
    'beautiful': 'ooh be gah',

    // === SONG-DERIVED VOCABULARY (from 210+ songs) ===
    // Time & Temporal
    'night': 'noop',
    'tonight': 'noop',
    'friday': 'frooby',
    'day': 'daya',
    'today': 'daya',
    'young': 'yung',
    'now': 'nowa',
    'always': 'foreva',
    'never': 'neva',
    'forever': 'foreva',

    // Emotions & Feelings
    'perfect': 'perfba',
    'sweet': 'sweeta',
    'smile': 'asmiiiil',
    'pressure': 'pressha',
    'hot': 'hotta',
    'cold': 'colda',
    'nothing': 'nuffin',
    'wrong': 'wronga',
    'mad': 'madda',

    // Actions & Movement  
    'run': 'runna',
    'walk': 'walka',
    'shake': 'sherb',
    'move': 'zooma',
    'go': 'gowa',
    'stop': 'stoppa',
    'shut': 'shutta',
    'fall': 'falla',

    // Places & Locations
    'way': 'waya',
    'sunshine': 'sunsha',
    'world': 'worlda',
    'everywhere': 'evryba',
    'street': 'streetba',
    'down': 'downa',
    'up': 'uppa',
    'under': 'unda',

    // People & Relationships
    'me': 'mee',
    'you': 'yib',
    'your': 'voo',
    'you\'re': 'voo',
    'you\'d': 'yib-doo',
    'i\'m': 'yob-a',
    'it\'s': 'ib-za',
    'girl': 'gurn',
    'boy': 'boyba',
    'someone': 'sumba',
    'stranger': 'stranga',
    'mama': 'mama',

    // Descriptive
    'little': 'libba',
    'long': 'longa',
    'new': 'newa',
    'wild': 'wilda',
    'fancy': 'fancba',
    'big': 'pik',

    // Nature
    'fire': 'fliblia',
    'stars': 'starza',
    'light': 'lighta',

    // Abstract
    'desire': 'desira',
    'persuasion': 'perswa',
    'fable': 'fabla',
    'mistake': 'mistaka',
    'dream': 'dreema',
    'hope': 'hopeba',

    // Common Verbs
    'say': 'saya',
    'need': 'needa',
    'want': 'wanta',
    'know': 'knowa',
    'think': 'thinka',
    'feel': 'feela',
    'make': 'maka',
    'take': 'taka',
    'give': 'giva',
    'work': 'worka',
    'shine': 'shina',

    // Modifiers

    // === NEW: Sims Wiki Common Phrases ===
    'nice to meet you': 'o vwa vwaf sna',
    'excuse me': 'blursh',
    'i have to pee': 'atohteh',
    'i\'m hungry': 'oh feebee lay',
    'i\'m pregnant': 'o mee pooba',
    'i\'m on fire': 'wabadebadoo',
    'help': 'shooflee',
    'problem': 'shooflee',
    'i love this': 'jadosi',
    'delicious': 'deileesh',
    'gross': 'des grobel',
    'funny': 'garsha',
    'i\'m bored': 'uhh shamoo ralla poo',
    'fire': 'zep tor maboo',
    'i look hot': 'ravasheen',
    'how are you': 'cuhteekaloo',
    'let\'s play': 'veena fredishay',
    'can this be real': 'k-me nes ra shen',
    'i can feel the pressure': 'yeah feel all but sur bri',

    // Lily Allen - Smile
    'when you first left me i was wanting more': 'wanufi lepto aba wabwa moops',
    'but you were fucking that girl next door': 'bayawa flooping ta gooni doo',
    'what\'cha do that for': 'waja dawa foops',
    'at first when i see you cry': 'kofui isabasi bug fui',
    'yeah it makes me smile': 'livawop asmil',

    // Nelly - Hot in Herre
    'hot': 'haspa',
    'heat': 'haspa',
    'burn': 'haspa',
    'i': 'yob',
    'my': 'ya',
    'ain\'t': 'nay',
    'nothing': 'neebie',
    'nobody': 'neeb-simsie',
    'best friend': 'yibsim',
    'friend': 'sim',
    'dance': 'densh',
    'take off': 'taka oof',
    'clothes': 'cwose',

    // Pussycat Dolls - Don't Cha
    'don\'t cha': 'doba',
    'don\'t you': 'doba',
    'wish': 'uisli',
    'girlfriend': 'no uog',
    'freak': 'uozzi',
    'raw': 'naaao',
    'fun': 'big fu',
    'don\'t cha wish your girlfriend was hot like me': 'doba uisli giog no uog no logi'
};

// Fallback synonym list - prevents common words from getting generic syllable translations
const fallbackSynonyms = {
    // Visual descriptors
    'deep': 'zoo',
    'dark': 'grob',
    'bright': 'shina',
    'soft': 'soffa',
    'hard': 'harda',

    // Speed descriptors
    'fast': 'fasta',
    'slow': 'slowa',
    'quick': 'fasta',

    // Size descriptors
    'large': 'pik',
    'huge': 'pik',
    'tiny': 'libba',
    'small': 'libba',

    // Emotion synonyms
    'joyful': 'ooh be gah',
    'cheerful': 'ooh be gah',
    'delighted': 'ooh be gah',
    'unhappy': 'awasa poa',
    'melancholy': 'awasa poa',
    'furious': 'benzi chibna looble',
    'irritated': 'benzi chibna looble',

    // Action synonyms
    'traveling': 'zooma',
    'chatting': 'yabba',
    'munching': 'nomnom',
    'sipping': 'sploosh',
    'resting': 'slerp',
    'snoozing': 'slerp',
    'laboring': 'worka',
    'gaming': 'yibsy',

    // State synonyms
    'ravenous': 'chumcha',
    'parched': 'sploosh',
    'weary': 'slerp',
    'fatigued': 'slerp',
    'drowsy': 'slerp'
};

// Song Influence Data (for Song Dictionary Page)
const wordInfluences = {
    'perfect': { simlish: 'perfba', song: 'Perfect Someone', artist: 'SOFI TUKKER' },
    'stranger': { simlish: 'stranga', song: 'Perfect Stranger', artist: 'FKA Twigs' },
    'night': { simlish: 'noop', song: 'Last Friday Night', artist: 'Katy Perry' },
    'friday': { simlish: 'frooby', song: 'Last Friday Night', artist: 'Katy Perry' },
    'last': { simlish: 'lass', song: 'Last Friday Night', artist: 'Katy Perry' },
    'credit': { simlish: 'crabit', song: 'Last Friday Night', artist: 'Katy Perry' },
    'card': { simlish: 'car', song: 'Last Friday Night', artist: 'Katy Perry' },
    'liar': { simlish: 'leeyar', song: 'Last Friday Night', artist: 'Katy Perry' },
    'shower': { simlish: 'showa', song: 'Last Friday Night', artist: 'Katy Perry' },
    'skinny dipping': { simlish: 'skeeby deeby', song: 'Last Friday Night', artist: 'Katy Perry' },
    'doctor': { simlish: 'docta', song: 'Hot N Cold', artist: 'Katy Perry' },
    'bridge': { simlish: 'brij', song: 'Hot N Cold', artist: 'Katy Perry' },
    'town': { simlish: 'towna', song: 'Hot N Cold', artist: 'Katy Perry' },
    'sleep': { simlish: 'slerp', song: 'Hot N Cold', artist: 'Katy Perry' },
    'young': { simlish: 'yung', song: 'We Are Young', artist: 'Fun.' },
    'beautiful': { simlish: 'beautba', song: 'Beautiful Now', artist: 'Zedd' },
    'run': { simlish: 'runna', song: 'Run Away With Me', artist: 'Carly Rae Jepsen' },
    'way': { simlish: 'waya', song: 'Run Away With Me', artist: 'Carly Rae Jepsen' },
    'sunshine': { simlish: 'sunsha', song: 'Pocket Full of Sunshine', artist: 'Natasha Bedingfield' },
    'smile': { simlish: 'asmiiiil', song: 'Smile', artist: 'Lily Allen' },
    'pressure': { simlish: 'pressha', song: 'Pressure', artist: 'Paramore' },
    'hot': { simlish: 'hotta', song: 'Hot N Cold', artist: 'Katy Perry' },
    'cold': { simlish: 'colda', song: 'Hot N Cold', artist: 'Katy Perry' },
    'shake': { simlish: 'sherb', song: 'Country Girl (Shake It)', artist: 'Luke Bryan' },
    'girl': { simlish: 'gurn', song: 'Country Girl (Shake It)', artist: 'Luke Bryan' },
    'love': { simlish: 'meshaloob', song: 'Please Don\'t Say You Love Me', artist: 'Gabrielle Aplin' },
    'fable': { simlish: 'fabla', song: 'Fable', artist: 'Gigi Perez' },
    'persuasion': { simlish: 'perswa', song: 'Persuasion', artist: 'Wishy' },
    'good': { simlish: 'goo', song: 'In A Good Way', artist: 'Faye Webster' },
    'shut': { simlish: 'shutta', song: 'Shut Up', artist: 'The Black Eyed Peas' },
    'up': { simlish: 'uppa', song: 'Up We Go', artist: 'Lights' },
    'nice to meet you': { simlish: 'o vwa vwaf sna', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'excuse me': { simlish: 'blursh', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'i\'m on fire': { simlish: 'wabadebadoo', song: 'The Sims 1 (Official)', artist: 'Maxis' },
    'help': { simlish: 'shooflee', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'i love this': { simlish: 'jadosi', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'delicious': { simlish: 'deileesh', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'gross': { simlish: 'des grobel', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'funny': { simlish: 'garsha', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'i\'m bored': { simlish: 'uhh shamoo ralla poo', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'i look hot': { simlish: 'ravasheen', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'how are you': { simlish: 'cuhteekaloo', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'let\'s play': { simlish: 'veena fredishay', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'great idea': { simlish: 'ah gwanda blitz', song: 'The Sims 4 (Official)', artist: 'Maxis' },
    'pressure': { simlish: 'pressha', song: 'Pressure', artist: 'Paramore' },
    'feel': { simlish: 'feel', song: 'Pressure', artist: 'Paramore' },
    'smile': { simlish: 'asmil', song: 'Smile', artist: 'Lily Allen' },
    'cry': { simlish: 'fui', song: 'Smile', artist: 'Lily Allen' },
    'girl next door': { simlish: 'gooni doo', song: 'Smile', artist: 'Lily Allen' },
    'hot': { simlish: 'haspa', song: 'Hot in Herre', artist: 'Nelly' },
    'nobody': { simlish: 'neeb-simsie', song: 'Hot in Herre', artist: 'Nelly' },
    'dance': { simlish: 'densh', song: 'Hot in Herre', artist: 'Nelly' }
};

// Simlish syllables - SINGLE SYLLABLES ONLY for exact matching
const simlishSyllables = [
    'sul', 'dag', 'yib', 'neib', 'vad', 'gah', 'ben', 'gweb', 'feeb',
    'wab', 'deb', 'hoo', 'noo', 'zee', 'zow', 'poa', 'cuh', 'fro',
    'gee', 'sha', 'ba', 'gal', 'lib', 'in', 'na', 'pik', 'oo', 'ra',
    'doo', 'tur', 'nip', 'if', 'fa', 'ja', 'ber', 'mesh', 'bah',
    'boom', 'bing', 'bang', 'snoo', 'woo', 'chib', 'loo', 'plerg',
    'chum', 'gy', 'sno', 'nerb', 'turb', 'skom', 'bake', 'sher'
];

// Simple hash function for deterministic word generation
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// Helper to get syllable deterministically based on seed
function getSimlishSyllable(seed = 0) {
    const index = seed % simlishSyllables.length;
    return simlishSyllables[index];
}

// DOM Elements
const englishInput = document.getElementById('english-input');
const simlishOutput = document.getElementById('simlish-output');
const translateBtn = document.getElementById('translate-btn');
const clearBtn = document.getElementById('clear-btn');
const phraseCards = document.querySelectorAll('.phrase-card');

// Count syllables in a word
function countSyllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    if (word.length === 0) return 0;

    let syllables = 0;
    let previousWasVowel = false;

    for (let i = 0; i < word.length; i++) {
        const isVowel = 'aeiouy'.includes(word[i]);
        if (isVowel && !previousWasVowel) {
            syllables++;
        }
        previousWasVowel = isVowel;
    }

    if (word.endsWith('e') && syllables > 1) {
        syllables--;
    }

    if (word.endsWith('le') && word.length > 2 && !'aeiouy'.includes(word[word.length - 3])) {
        syllables++;
    }

    return Math.max(1, syllables);
}

// Generate a Simlish word based on EXACT syllable count (deterministic)
function generateSimlishWordBySyllables(syllableCount, originalWord = '') {
    if (syllableCount === 0) return '';

    const seed = hashString(originalWord);
    let word = '';
    for (let i = 0; i < syllableCount; i++) {
        word += getSimlishSyllable(seed + i);
    }

    return word;
}

// Translation function (preserves indentation for song lyrics)
function translateToSimlish(text) {
    if (!text.trim()) return '';

    const lines = text.split('\n');
    const translatedLines = lines.map(line => {
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : '';
        const content = line.slice(indent.length);

        if (!content.trim()) return line;

        let result = content.toLowerCase();

        // STEP 1: Process context-aware phrases (if module is loaded)
        if (typeof processContextualPhrases === 'function') {
            result = processContextualPhrases(result);
        }

        // STEP 2: Sort dictionary entries by length (longest first) to match phrases before words
        const sortedEntries = Object.entries(simlishDictionary).sort((a, b) => b[0].length - a[0].length);

        // STEP 3: Match remaining phrases and words from dictionary (skip contextual phrases)
        for (const [english, simlish] of sortedEntries) {
            // Skip if this is a contextual phrase (already processed)
            if (typeof contextualPhrases !== 'undefined' && contextualPhrases[english]) continue;

            // Smart regex: Only add \b if the key starts/ends with a word character
            // This fixes matches for keys starting with punctuation like "'cause"
            const startBoundary = /^\w/.test(english) ? '\\b' : '';
            const endBoundary = /\w$/.test(english) ? '\\b' : '';

            // Escape special regex characters in the key (like . or ?)
            const escapedEnglish = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            const regex = new RegExp(startBoundary + escapedEnglish + endBoundary, 'gi');
            const translation = Array.isArray(simlish) ? simlish[0] : simlish;

            // Replace spaces with underscores to prevent splitting
            const safeTranslation = translation.replace(/\s+/g, '_');
            result = result.replace(regex, `[[${safeTranslation}]]`);
        }

        // Generate Simlish for remaining words
        result = result.split(/\s+/).map(word => {
            // Check for any bracketed content (handles contractions like [[yib]]'re)
            if (word.includes('[[')) {
                return word.replace(/\[\[(.*?)\]\]/g, (match, p1) => p1.replace(/_/g, ' '));
            }

            const match = word.match(/^([^a-z']*)([a-z']+)([^a-z']*)$/i);
            if (!match) return word;

            const [, prefix, cleanWord, suffix] = match;
            const wasCapitalized = /^[A-Z]/.test(word);

            // Check fallback synonyms first
            const lowerWord = cleanWord.toLowerCase();
            let simlishWord;

            if (fallbackSynonyms[lowerWord]) {
                simlishWord = fallbackSynonyms[lowerWord];
            } else {
                // NEW: Check semantic categories for concept-based translation
                const semanticMatch = typeof findSemanticMatch === 'function' ? findSemanticMatch(cleanWord) : null;
                if (semanticMatch) {
                    simlishWord = semanticMatch;
                } else {
                    // Fall back to syllable-based generation
                    const syllableCount = countSyllables(cleanWord);
                    simlishWord = generateSimlishWordBySyllables(syllableCount, cleanWord);
                }
            }

            if (wasCapitalized && simlishWord.length > 0) {
                simlishWord = simlishWord.charAt(0).toUpperCase() + simlishWord.slice(1);
            }

            return prefix + simlishWord + suffix;
        }).join(' ');

        return indent + result;
    });

    return translatedLines.join('\n');
}

// Event Listeners
translateBtn.addEventListener('click', () => {
    const englishText = englishInput.value;
    const simlishText = translateToSimlish(englishText);
    simlishOutput.value = simlishText;

    simlishOutput.style.animation = 'none';
    setTimeout(() => {
        simlishOutput.style.animation = 'fadeInUp 0.5s ease';
    }, 10);
});

clearBtn.addEventListener('click', () => {
    englishInput.value = '';
    simlishOutput.value = '';
});

englishInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        translateBtn.click();
    }
});

phraseCards.forEach(card => {
    card.addEventListener('click', () => {
        const english = card.dataset.english;
        const simlish = card.dataset.simlish;

        englishInput.value = english;
        simlishOutput.value = simlish;

        document.querySelector('.translator-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Synchronized scrolling for side-by-side view
let isScrolling = false;

englishInput.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        simlishOutput.scrollTop = englishInput.scrollTop;
        setTimeout(() => { isScrolling = false; }, 50);
    }
});

simlishOutput.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        englishInput.scrollTop = simlishOutput.scrollTop;
        setTimeout(() => { isScrolling = false; }, 50);
    }
});

console.log('Sul sul! Simlish Translator restored and ready! 🎵');
