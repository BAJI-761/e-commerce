function FilterBar({ onCategoryChange, onSortChange, selectedCategory = 'all' }) {
    try {
        const categories = ['all', 'Wall Hangings', 'Plant Hangers', 'Curtains', 'Mirrors', 'Bags', 'Keychains'];
        const sortOptions = [
            { value: 'featured', label: 'Featured' },
            { value: 'price-low', label: 'Price: Low to High' },
            { value: 'price-high', label: 'Price: High to Low' },
            { value: 'rating', label: 'Highest Rated' },
            { value: 'newest', label: 'Newest First' },
            { value: 'popularity', label: 'Most Popular' }
        ];

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="filter-bar" data-file="components/FilterBar.js" className="bg-white border-b border-gray-200 sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => onCategoryChange(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedCategory === category
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category === 'all' ? 'All Products' : category}
                                </button>
                            ))}
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <i data-lucide="filter" className="w-4 h-4 text-gray-600"></i>
                                <select 
                                    onChange={(e) => onSortChange(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                >
                                    {sortOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <i data-lucide="grid" className="w-4 h-4"></i>
                                <span className="text-sm">Grid View</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('FilterBar component error:', error);
        reportError(error);
    }
}
