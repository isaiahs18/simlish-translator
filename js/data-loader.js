/**
 * Data Loader - Async JSON data loading with caching
 * Optimized for performance and browser caching
 */
class DataLoader {
    constructor() {
        this.cache = {};
        this.loading = {};
    }

    /**
     * Load a JSON file with caching
     * @param {string} filename - Name of JSON file (without .json extension)
     * @returns {Promise<Object>} Parsed JSON data
     */
    async load(filename) {
        // Return cached data if available
        if (this.cache[filename]) {
            console.log(`📦 Using cached data: ${filename}`);
            return this.cache[filename];
        }

        // Return existing promise if already loading
        if (this.loading[filename]) {
            console.log(`⏳ Waiting for ${filename} to load...`);
            return this.loading[filename];
        }

        // Load the file
        console.log(`🔄 Loading ${filename}.json...`);
        this.loading[filename] = fetch(`data/${filename}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${filename}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                this.cache[filename] = data;
                delete this.loading[filename];
                console.log(`✅ Loaded ${filename}.json`);
                return data;
            })
            .catch(error => {
                delete this.loading[filename];
                console.error(`❌ Error loading ${filename}:`, error);
                throw error;
            });

        return this.loading[filename];
    }

    /**
     * Load all core translator data files
     * @returns {Promise<Object>} Object with all loaded data
     */
    async loadTranslatorData() {
        console.log('🚀 Loading translator data...');
        const [dictionary, contextual, semantic] = await Promise.all([
            this.load('dictionary-core'),
            this.load('contextual-phrases'),
            this.load('semantic-categories')
        ]);

        console.log('✨ All translator data loaded!');
        return {
            dictionary,
            contextualPhrases: contextual,
            semanticCategories: semantic
        };
    }

    /**
     * Preload data for faster subsequent access
     * @param {Array<string>} filenames - List of files to preload
     */
    async preload(filenames) {
        console.log(`⚡ Preloading ${filenames.length} files...`);
        await Promise.all(filenames.map(f => this.load(f)));
    }

    /**
     * Clear cache (useful for development/testing)
     */
    clearCache() {
        this.cache = {};
        console.log('🗑️ Cache cleared');
    }
}

// Export for use in other modules
window.DataLoader = DataLoader;
