function Hero() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section data-name="hero" data-file="components/Hero.js" className="hero-gradient py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="w-4 h-4 text-green-600">🌿</span>
                                <span className="text-sm font-medium text-gray-800">100% Sustainable Materials</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                                Artisan
                                <span className="block text-gray-700">Macrame</span>
                                <span className="block text-4xl lg:text-5xl text-gray-600">Collection</span>
                            </h1>
                            
                            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                                Transform your space with handcrafted fiber art. Each piece tells a story of traditional craftsmanship and modern design.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn-primary text-white px-8 py-4 rounded-full font-medium text-lg">
                                    Explore Collection
                                </button>
                                <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors">
                                    Custom Orders
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop&q=80" 
                                alt="Featured Macrame Art"
                                className="rounded-2xl shadow-2xl w-full h-auto"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x700/f3f4f6/9ca3af?text=Macrame+Art';
                                }}
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
                                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">2,500+ Happy Customers</p>
                                        <div className="flex items-center text-yellow-400">
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-xs text-gray-600 ml-1">4.9/5 Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
