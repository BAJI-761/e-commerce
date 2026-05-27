function SearchModal({ isOpen, onClose, onAddToCart }) {
    try {
        const [searchQuery, setSearchQuery] = React.useState('');
        const [priceRange, setPriceRange] = React.useState([0, 300]);
        const [selectedCategory, setSelectedCategory] = React.useState('all');
        const [sortBy, setSortBy] = React.useState('relevance');
        
        const products = getProducts();
        
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            
            return matchesSearch && matchesPrice && matchesCategory;
        });

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        if (!isOpen) return null;

        return (
            <div data-name="search-modal" data-file="components/SearchModal.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-start justify-center min-h-screen p-4 pt-20">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                        <div className="p-6 border-b">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 relative">
                                    <i data-lucide="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border rounded-lg"
                                    />
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                    <i data-lucide="x" className="w-5 h-5"></i>
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium mb-2">Category</h4>
                                        <select 
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="w-full border rounded-lg px-3 py-2"
                                        >
                                            <option value="all">All Categories</option>
                                            <option value="Wall Hangings">Wall Hangings</option>
                                            <option value="Plant Hangers">Plant Hangers</option>
                                            <option value="Curtains">Curtains</option>
                                            <option value="Mirrors">Mirrors</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-medium mb-2">Price Range</h4>
                                        <div className="space-y-2">
                                            <input
                                                type="range"
                                                min="0"
                                                max="300"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                                className="w-full"
                                            />
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>$0</span>
                                                <span>${priceRange[1]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-3">
                                    {filteredProducts.length === 0 ? (
                                        <div className="text-center py-12">
                                            <p className="text-gray-500">No products found matching your criteria</p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {filteredProducts.map(product => (
                                                <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                                    <img 
                                                        src={product.image} 
                                                        alt={product.name}
                                                        className="w-full aspect-square object-cover"
                                                    />
                                                    <div className="p-4">
                                                        <h3 className="font-medium mb-1">{product.name}</h3>
                                                        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-bold">${product.price}</span>
                                                            <button 
                                                                onClick={() => {
                                                                    onAddToCart(product);
                                                                    onClose();
                                                                }}
                                                                className="bg-gray-900 text-white px-3 py-1 rounded text-sm"
                                                            >
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('SearchModal component error:', error);
        reportError(error);
    }
}
