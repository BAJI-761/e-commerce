function WishlistPage({ isOpen, onClose, wishlistedItems, onAddToCart, onToggleWishlist }) {
    try {
        const products = getProducts();
        const wishlistProducts = products.filter(product => wishlistedItems.has(product.id));

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        if (!isOpen) return null;

        return (
            <div data-name="wishlist-page" data-file="components/WishlistPage.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">My Wishlist ({wishlistProducts.length})</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <div className="p-6">
                            {wishlistProducts.length === 0 ? (
                                <div className="text-center py-12">
                                    <i data-lucide="heart" className="w-16 h-16 mx-auto text-gray-300 mb-4"></i>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                                    <p className="text-gray-600 mb-6">Save items you love to view them later</p>
                                    <button onClick={onClose} className="bg-gray-900 text-white px-6 py-3 rounded-lg">
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {wishlistProducts.map(product => (
                                        <div key={product.id} className="border rounded-lg overflow-hidden">
                                            <div className="relative aspect-square">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <button 
                                                    onClick={() => onToggleWishlist(product.id)}
                                                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500"
                                                >
                                                    <i data-lucide="heart" className="w-4 h-4 fill-current"></i>
                                                </button>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-medium mb-2">{product.name}</h3>
                                                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold">${product.price}</span>
                                                    <button 
                                                        onClick={() => onAddToCart(product)}
                                                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
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
        );
    } catch (error) {
        console.error('WishlistPage component error:', error);
        reportError(error);
    }
}
