function ProductDetails({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
    try {
        const [selectedImage, setSelectedImage] = React.useState(0);

        React.useEffect(() => {
            if (isOpen) {
                lucide.createIcons();
            }
        }, [isOpen]);

        if (!isOpen || !product) return null;

        const renderStars = (rating) => {
            return Array.from({ length: 5 }, (_, i) => (
                <i key={i} data-lucide="star" 
                   className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}></i>
            ));
        };

        return (
            <div data-name="product-details" data-file="components/ProductDetails.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">Product Details</h2>
                            <button 
                                onClick={onClose} 
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                type="button"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                                        <img 
                                            src={product.images ? product.images[selectedImage] : product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=Product+Image';
                                            }}
                                        />
                                    </div>
                                    {product.images && product.images.length > 1 && (
                                        <div className="flex space-x-2">
                                            {product.images.map((image, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedImage(index)}
                                                    className={`w-16 h-16 rounded border-2 overflow-hidden ${
                                                        selectedImage === index ? 'border-gray-900' : 'border-gray-200'
                                                    }`}
                                                >
                                                    <img 
                                                        src={image} 
                                                        alt="" 
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/64x64/f3f4f6/9ca3af?text=Img';
                                                        }}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h1 className="text-2xl font-bold font-display mb-2">{product.name}</h1>
                                        <p className="text-gray-600 text-sm uppercase tracking-wide">{product.category}</p>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex space-x-1">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <span className="text-3xl font-bold">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                        )}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">{product.longDescription || product.description}</p>

                                    <div className="space-y-2">
                                        <p><span className="font-medium">Dimensions:</span> {product.dimensions}</p>
                                        <p><span className="font-medium">Materials:</span> {product.materials}</p>
                                        <p><span className="font-medium">Availability:</span> 
                                            <span className={`ml-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                                {product.inStock ? `In Stock (${product.stockCount})` : 'Out of Stock'}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex space-x-4 pt-4">
                                        <button 
                                            onClick={() => onAddToCart(product)}
                                            disabled={!product.inStock}
                                            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                                                product.inStock 
                                                    ? 'bg-gray-900 text-white hover:bg-gray-800' 
                                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                        >
                                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                        </button>
                                        <button 
                                            onClick={() => onToggleWishlist(product.id)}
                                            className={`p-3 rounded-lg border-2 transition-all ${
                                                isWishlisted 
                                                    ? 'border-red-500 text-red-500 bg-red-50' 
                                                    : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                            }`}
                                        >
                                            ♡
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductDetails component error:', error);
        reportError(error);
    }
}
