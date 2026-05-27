function ProductGrid({ onAddToCart, wishlistedItems, onToggleWishlist, onViewDetails }) {
    try {
        const [selectedCategory, setSelectedCategory] = React.useState('all');
        const [sortBy, setSortBy] = React.useState('featured');
        
        const products = getProducts();

        const filteredProducts = products.filter(product => 
            selectedCategory === 'all' || product.category === selectedCategory
        );

        const sortedProducts = [...filteredProducts].sort((a, b) => {
            switch (sortBy) {
                case 'price-low': return a.price - b.price;
                case 'price-high': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'newest': return b.id - a.id;
                default: return b.featured - a.featured;
            }
        });

        return (
            <section data-name="product-grid" data-file="components/ProductGrid.js" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Featured Collection</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Each piece is carefully handcrafted using premium materials and traditional macrame techniques.
                        </p>
                    </div>
                    
                    <FilterBar 
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        onSortChange={setSortBy}
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {sortedProducts.map(product => (
                            <div key={product.id} className="fade-in">
                                <ProductCard 
                                    product={product} 
                                    onAddToCart={onAddToCart}
                                    onToggleWishlist={onToggleWishlist}
                                    isWishlisted={wishlistedItems.has(product.id)}
                                    onViewDetails={onViewDetails}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProductGrid component error:', error);
        reportError(error);
    }
}
