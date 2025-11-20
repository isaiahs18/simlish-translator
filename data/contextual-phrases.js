window.SimlishData = window.SimlishData || {};

window.SimlishData.contextualPhrases = {
    "i love you": [
        { "simlish": "por see gab lurv", "context": ["so", "much", "really", "truly", "deeply"], "weight": 1.5 },
        { "simlish": "meshaloob", "context": ["baby", "babe", "honey", "darling"], "weight": 1.2 }
    ],
    "love": [
        { "simlish": "meshaloob", "context": ["i", "you", "we", "my", "your"], "weight": 1.5 }
    ]
};

console.log('✅ Contextual phrases loaded');
