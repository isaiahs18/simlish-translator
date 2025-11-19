// Simlish Translator - Main JavaScript

// Simlish Dictionary (Common words and phrases)
const simlishDictionary = {
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
    'friend': 'boobasnot',
    'party': 'yibsy',
    'music': 'bing bang boom',
    'dance': 'snoogy woogy',
    'fun': 'yibsy',
    'awesome': 'whippna choba dog',
    'cool': 'zow zibby',
    'beautiful': 'ooh be gah',

    // Phonetic phrase mappings (multi-word for better flow) - CHECKED FIRST!
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

    // Song-specific curated words (matching official Simlish versions)
    // Note: Arrays = multiple options, first is most common
    'honky': 'hurky',
    'tonk': 'durk',
    'badonkadonk': 'badurkadurk',
    'shake': ['sherb', 'sherber'],
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

    // Manual rhyme families - add rhyming words here!
    // -aker rhymes (maker, shaker, taker, breaker)
    'maker': 'maka',
    'shaker': 'shaka',
    'taker': 'taka',
    'breaker': 'braka',

    // -oney rhymes (money, honey, funny, sunny)
    'money': 'muni',
    'honey': 'huni',
    'funny': 'funi',
    'sunny': 'suni'
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

        // Sort dictionary entries by length (longest first) to match phrases before words
        const sortedEntries = Object.entries(simlishDictionary).sort((a, b) => b[0].length - a[0].length);

        // Match phrases and words (longest first for better context)
        for (const [english, simlish] of sortedEntries) {
            const regex = new RegExp('\\b' + english + '\\b', 'gi');
            const translation = Array.isArray(simlish) ? simlish[0] : simlish;
            result = result.replace(regex, `[[${translation}]]`);
        }

        // Generate Simlish for remaining words
        result = result.split(/\s+/).map(word => {
            if (word.startsWith('[[') && word.endsWith(']]')) {
                return word.slice(2, -2);
            }

            const match = word.match(/^([^a-z']*)([a-z']+)([^a-z']*)$/i);
            if (!match) return word;

            const [, prefix, cleanWord, suffix] = match;
            const wasCapitalized = /^[A-Z]/.test(word);

            const syllableCount = countSyllables(cleanWord);
            let simlishWord = generateSimlishWordBySyllables(syllableCount, cleanWord);

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

console.log('Sul sul! Welcome to the Simlish Translator! 🎮');
