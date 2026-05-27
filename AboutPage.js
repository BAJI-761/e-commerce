function AboutPage({ isOpen, onClose }) {
    try {
        React.useEffect(() => {
            if (isOpen) {
                lucide.createIcons();
            }
        }, [isOpen]);

        if (!isOpen) return null;

        return (
            <div data-name="about-page" data-file="components/AboutPage.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">About Artisan Macrame</h2>
                            <button 
                                onClick={onClose} 
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl leading-none"
                                type="button"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="text-center">
                                <img 
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=300&fit=crop&q=80"
                                    alt="Artisan at work"
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/600x300/f3f4f6/9ca3af?text=Artisan+Macrame';
                                    }}
                                />
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                                    Handcrafted with Love, Designed for Life
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-3">Our Story</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Founded in 2018, Artisan Macrame began as a passion project in a small Portland studio. 
                                        What started with a love for fiber arts has grown into a mission to bring sustainable, 
                                        handcrafted beauty into every home.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-3">Our Mission</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We believe in the power of handmade art to transform spaces and uplift spirits. 
                                        Every piece is crafted with intention, using only sustainable materials and 
                                        traditional techniques passed down through generations.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-lg font-semibold mb-4">Why Choose Artisan Macrame?</h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="w-8 h-8 mx-auto mb-2 text-green-600">🌿</div>
                                        <h5 className="font-medium">100% Sustainable</h5>
                                        <p className="text-sm text-gray-600">Natural fibers and eco-friendly materials</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 mx-auto mb-2 text-red-500">❤️</div>
                                        <h5 className="font-medium">Handcrafted</h5>
                                        <p className="text-sm text-gray-600">Each piece is unique and made with care</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-500">🏆</div>
                                        <h5 className="font-medium">Quality Guaranteed</h5>
                                        <p className="text-sm text-gray-600">Lifetime craftsmanship warranty</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <button 
                                    onClick={onClose}
                                    className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Explore Our Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AboutPage component error:', error);
        reportError(error);
    }
}
