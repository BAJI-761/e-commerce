function Header({ cartItems, onCartToggle, wishlistCount = 0, user, onLogin, onLogout, onWishlistOpen, onCustomOrder, onAbout, onContact }) {
    try {
        const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
        const [isProfileOpen, setIsProfileOpen] = React.useState(false);
        const [isSearchOpen, setIsSearchOpen] = React.useState(false);
        const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleUserClick = () => {
            if (user) {
                setIsProfileOpen(true);
            } else {
                setIsAuthModalOpen(true);
            }
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="bg-white shadow-sm border-b sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
                            <h1 className="text-2xl font-display font-bold text-gray-900">Artisan Macrame</h1>
                        </div>
                        
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
                            <button onClick={onCustomOrder} className="text-gray-700 hover:text-gray-900 transition-colors">Custom Orders</button>
                            <button onClick={onAbout} className="text-gray-700 hover:text-gray-900 transition-colors">About</button>
                            <button onClick={onContact} className="text-gray-700 hover:text-gray-900 transition-colors">Contact</button>
                        </nav>

                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                <i data-lucide="search" className="w-5 h-5"></i>
                            </button>
                            
                            <button 
                                onClick={onWishlistOpen}
                                className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                <i data-lucide="heart" className="w-5 h-5"></i>
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {wishlistCount}
                                    </span>
                                )}
                            </button>

                            <button 
                                onClick={handleUserClick}
                                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                <i data-lucide="user" className="w-5 h-5"></i>
                            </button>
                            
                            <button 
                                onClick={onCartToggle}
                                className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                <i data-lucide="shopping-bag" className="w-5 h-5"></i>
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isAuthModalOpen && (
                    <AuthModal 
                        isOpen={isAuthModalOpen} 
                        onClose={() => setIsAuthModalOpen(false)} 
                        onLogin={onLogin} 
                    />
                )}

                {isProfileOpen && user && (
                    <UserProfile 
                        isOpen={isProfileOpen} 
                        onClose={() => setIsProfileOpen(false)} 
                        user={user}
                        onUpdateUser={onLogin}
                    />
                )}

                {isSearchOpen && (
                    <SearchModal 
                        isOpen={isSearchOpen} 
                        onClose={() => setIsSearchOpen(false)} 
                    />
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
