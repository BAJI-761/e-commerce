function Footer() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full"></div>
                                <h3 className="text-xl font-display font-bold">Artisan Macrame</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Handcrafted with love, designed for your space. Every piece tells a story of artisan tradition.
                            </p>
                            <div className="flex space-x-4">
                                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i data-lucide="instagram" className="w-4 h-4"></i>
                                </button>
                                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i data-lucide="facebook" className="w-4 h-4"></i>
                                </button>
                                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i data-lucide="twitter" className="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-4">Customer Service</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-4">Contact Info</h4>
                            <div className="space-y-2 text-gray-300 text-sm">
                                <div className="flex items-center space-x-2">
                                    <i data-lucide="mail" className="w-4 h-4"></i>
                                    <span>hello@artisanmacrame.com</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i data-lucide="phone" className="w-4 h-4"></i>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i data-lucide="map-pin" className="w-4 h-4"></i>
                                    <span>Portland, Oregon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2024 Artisan Macrame. All rights reserved. | Privacy Policy | Terms of Service</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
