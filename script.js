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
    'beautiful': 'ooh be gah'
};

// Simlish syllables for generating random Simlish words
const simlishSyllables = [
    'sul', 'dag', 'yib', 'neib', 'vad', 'mesh', 'ooh', 'bah', 'gah',
    'chib', 'loo', 'ben', 'gweb', 'feeb', 'wab', 'deb', 'hoo', 'noo',
    'zee', 'zow', 'bing', 'bang', 'boom', 'snoo', 'woo', 'poa', 'cuh',
    'fro', 'gee', 'sha', 'loo', 'ba', 'sno', 'gy', 'plerg', 'chum'
];

// DOM Elements
const englishInput = document.getElementById('english-input');
const simlishOutput = document.getElementById('simlish-output');
const translateBtn = document.getElementById('translate-btn');
const reverseBtn = document.getElementById('reverse-btn');
const clearBtn = document.getElementById('clear-btn');
const phraseCards = document.querySelectorAll('.phrase-card');

// Translation function
function translateToSimlish(text) {
    if (!text.trim()) return '';
    
    let result = text.toLowerCase();
    
    // First, try to match exact phrases
    for (const [english, simlish] of Object.entries(simlishDictionary)) {
        const regex = new RegExp('\\b' + english + '\\b', 'gi');
        result = result.replace(regex, simlish);
    }
    
    // For remaining words, generate Simlish-sounding words
    result = result.split(' ').map(word => {
        // If word is already translated, keep it
        if (Object.values(simlishDictionary).includes(word.toLowerCase())) {
            return word;
        }
        
        // If word contains only letters, generate Simlish version
        if (/^[a-z]+$/i.test(word)) {
            return generateSimlishWord(word.length);
        }
        
        return word;
    }).join(' ');
    
    return result;
}

// Generate a random Simlish word based on length
function generateSimlishWord(length) {
    const syllableCount = Math.max(1, Math.ceil(length / 3));
    let word = '';
    
    for (let i = 0; i < syllableCount; i++) {
        const randomSyllable = simlishSyllables[Math.floor(Math.random() * simlishSyllables.length)];
        word += randomSyllable;
    }
    
    return word;
}

// Reverse translation (Simlish to English)
function translateToEnglish(text) {
    if (!text.trim()) return '';
    
    let result = text.toLowerCase();
    
    // Create reverse dictionary
    const reverseDictionary = {};
    for (const [english, simlish] of Object.entries(simlishDictionary)) {
        reverseDictionary[simlish] = english;
    }
    
    // Replace Simlish words with English
    for (const [simlish, english] of Object.entries(reverseDictionary)) {
        const regex = new RegExp('\\b' + simlish + '\\b', 'gi');
        result = result.replace(regex, english);
    }
    
    return result;
}

// Event Listeners
translateBtn.addEventListener('click', () => {
    const englishText = englishInput.value;
    const simlishText = translateToSimlish(englishText);
    simlishOutput.value = simlishText;
    
    // Add animation
    simlishOutput.style.animation = 'none';
    setTimeout(() => {
        simlishOutput.style.animation = 'fadeInUp 0.5s ease';
    }, 10);
});

reverseBtn.addEventListener('click', () => {
    const simlishText = simlishOutput.value;
    const englishText = translateToEnglish(simlishText);
    englishInput.value = englishText;
    
    // Add animation
    englishInput.style.animation = 'none';
    setTimeout(() => {
        englishInput.style.animation = 'fadeInUp 0.5s ease';
    }, 10);
});

clearBtn.addEventListener('click', () => {
    englishInput.value = '';
    simlishOutput.value = '';
});

// Allow Enter key to translate
englishInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        translateBtn.click();
    }
});

// Phrase card click handlers
phraseCards.forEach(card => {
    card.addEventListener('click', () => {
        const english = card.dataset.english;
        const simlish = card.dataset.simlish;
        
        englishInput.value = english;
        simlishOutput.value = simlish;
        
        // Scroll to translator
        document.querySelector('.translator-box').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Welcome message
console.log('Sul sul! Welcome to the Simlish Translator! 🎮');
