// scrapeSimlish.js – Bulk scraper for Simlish words from official sources
// -------------------------------------------------------------------------
// Run with: node scrapeSimlish.js
// 
// This script fetches Simlish lyrics from official song pages and extracts
// unique Simlish tokens, generating a code fragment you can paste into script.js

const https = require('https');
const fs = require('fs');

// Add official Simlish lyric URLs here
// Example sources: Sims Wiki, EA official pages, YouTube lyric videos
const urls = [
    // Add your URLs here, for example:
    // 'https://sims.fandom.com/wiki/Simlish_songs',
    // 'https://www.ea.com/games/the-sims/the-sims-4/news/simlish-songs',
];

// Simple helper to fetch a page
function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

// Extract Simlish tokens from HTML
// Adjust the regex pattern to match the actual page structure
function extractSimlish(html) {
    const tokens = new Set();

    // Example pattern - adjust based on actual HTML structure
    // This looks for content in <span class="simlish">...</span> tags
    const matches = html.match(/<span class="simlish">([^<]+)<\/span>/gi) || [];

    matches.forEach(m => {
        const word = m.replace(/<[^>]+>/g, '').trim().toLowerCase();
        if (word && word.length > 0) {
            tokens.add(word);
        }
    });

    return tokens;
}

// Main scraping function
(async () => {
    console.log('🎵 Simlish Bulk Scraper Starting...\n');

    if (urls.length === 0) {
        console.log('⚠️  No URLs configured!');
        console.log('Please add Simlish lyric URLs to the urls array in this script.\n');
        console.log('Example sources:');
        console.log('  - Sims Wiki lyric pages');
        console.log('  - EA official Simlish song pages');
        console.log('  - Fan-maintained Simlish databases\n');
        return;
    }

    const allTokens = new Set();
    let successCount = 0;
    let failCount = 0;

    for (const url of urls) {
        try {
            console.log(`Fetching: ${url}`);
            const html = await fetch(url);
            const tokens = extractSimlish(html);

            tokens.forEach(t => allTokens.add(t));
            successCount++;
            console.log(`  ✔︎ Found ${tokens.size} unique tokens\n`);
        } catch (e) {
            failCount++;
            console.error(`  ✘ Failed: ${e.message}\n`);
        }
    }

    // Generate code fragment for script.js
    const lines = Array.from(allTokens)
        .sort()
        .map(token => `    '${token}': '${token}',`);

    const output = `// Generated Simlish vocabulary (${allTokens.size} words)\n` + lines.join('\n');

    fs.writeFileSync('simlish-fragment.txt', output);

    console.log('═══════════════════════════════════════════════════════');
    console.log(`✅ Scraping complete!`);
    console.log(`   Successfully scraped: ${successCount} pages`);
    console.log(`   Failed: ${failCount} pages`);
    console.log(`   Total unique tokens: ${allTokens.size}`);
    console.log(`   Output saved to: simlish-fragment.txt`);
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Next steps:');
    console.log('1. Open simlish-fragment.txt');
    console.log('2. Copy the generated code');
    console.log('3. Paste it into script.js under "// Generated Vocabulary (removed)"');
    console.log('4. Map the Simlish tokens to their English equivalents\n');
})();
