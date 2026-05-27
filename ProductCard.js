function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted = false, onViewDetails }) {
    try {
        const renderStars = (rating) => {
            return Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                </span>
            ));
        };

        return (
            <div data-name="product-card" data-file="components/ProductCard.js" 
                 className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group h-[500px] flex flex-col">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=Macrame+Art';
                        }}
                        onClick={() => onViewDetails(product)}
                        loading="lazy"
                    />
                    
                    <button 
                        onClick={() => onToggleWishlist(product.id)}
                        className={`absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm wishlist-heart ${isWishlisted ? 'active' : ''}`}
                    >
                        <span className="text-red-500">♡</span>
                    </button>
                    
                    {product.tags && product.tags.includes('sale') && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            SALE
                        </div>
                    )}
                    
                    {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium">Out of Stock</span>
                        </div>
                    )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 
                            className="text-lg font-semibold text-gray-900 font-display line-clamp-2 cursor-pointer hover:text-gray-700"
                            onClick={() => onViewDetails(product)}
                        >
                            {product.name}
                        </h3>
                        <div className="text-right ml-2">
                            <div className="price-badge text-white px-3 py-1 rounded-full text-sm font-bold">
                                ${product.price}
                            </div>
                            {product.originalPrice && (
                                <div className="text-xs text-gray-500 line-through mt-1">
                                    ${product.originalPrice}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <p className="text-gray-600 text-xs uppercase tracking-wide mb-2">{product.category}</p>
                    
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="flex space-x-1">
                            {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                    
                    <div className="space-y-2 mt-auto">
                        <button 
                            onClick={() => onViewDetails(product)}
                            className="w-full py-2 px-4 rounded-xl font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all"
                        >
                            View Details
                        </button>
                        <button 
                            onClick={() => onAddToCart(product)}
                            disabled={!product.inStock}
                            className={`w-full py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 ${
                                product.inStock 
                                    ? 'btn-primary text-white' 
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <span>{product.inStock ? '🛒 Add to Cart' : '⏰ Notify Me'}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
