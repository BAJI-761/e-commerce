function App() {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [isCartOpen, setIsCartOpen] = React.useState(false);
        const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
        const [isOrderStatusOpen, setIsOrderStatusOpen] = React.useState(false);
        const [isWishlistOpen, setIsWishlistOpen] = React.useState(false);
        const [isCustomOrderOpen, setIsCustomOrderOpen] = React.useState(false);
        const [isAboutOpen, setIsAboutOpen] = React.useState(false);
        const [isContactOpen, setIsContactOpen] = React.useState(false);
        const [isProductDetailsOpen, setIsProductDetailsOpen] = React.useState(false);
        const [selectedProduct, setSelectedProduct] = React.useState(null);
        const [wishlistedItems, setWishlistedItems] = React.useState(new Set());
        const [currentOrder, setCurrentOrder] = React.useState(null);
        const [checkoutTotal, setCheckoutTotal] = React.useState(0);
        const [user, setUser] = React.useState(null);

        const addToCart = (product) => {
            setCartItems(prev => {
                const existing = prev.find(item => item.id === product.id);
                if (existing) {
                    return prev.map(item => 
                        item.id === product.id 
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prev, { ...product, quantity: 1 }];
            });
        };

        const updateQuantity = (id, newQuantity) => {
            if (newQuantity <= 0) {
                removeFromCart(id);
                return;
            }
            setCartItems(prev => 
                prev.map(item => 
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        };

        const removeFromCart = (id) => {
            setCartItems(prev => prev.filter(item => item.id !== id));
        };

        const toggleCart = () => {
            setIsCartOpen(prev => !prev);
        };

        const toggleWishlist = (productId) => {
            setWishlistedItems(prev => {
                const newSet = new Set(prev);
                if (newSet.has(productId)) {
                    newSet.delete(productId);
                } else {
                    newSet.add(productId);
                }
                return newSet;
            });
        };

        const handleCheckout = (total) => {
            setCheckoutTotal(total);
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
        };

        const handleOrderComplete = async (orderId, customerInfo) => {
            const order = {
                id: orderId,
                date: new Date().toISOString(),
                customerInfo,
                items: cartItems,
                total: checkoutTotal
            };
            
            if (user) {
                try {
                    await trickleCreateObject(`order:${user.id}`, order);
                } catch (error) {
                    console.error('Failed to save order:', error);
                }
            }
            
            setCurrentOrder(order);
            setCartItems([]);
            setIsCheckoutOpen(false);
            setIsOrderStatusOpen(true);
        };

        const handleLogin = (userData) => {
            setUser(userData);
        };

        const handleViewDetails = (product) => {
            setSelectedProduct(product);
            setIsProductDetailsOpen(true);
        };

        return (
            <div data-name="app" data-file="app.js">
                <Header 
                    cartItems={cartItems} 
                    onCartToggle={toggleCart}
                    wishlistCount={wishlistedItems.size}
                    user={user}
                    onLogin={handleLogin}
                    onLogout={() => setUser(null)}
                    onWishlistOpen={() => setIsWishlistOpen(true)}
                    onCustomOrder={() => setIsCustomOrderOpen(true)}
                    onAbout={() => setIsAboutOpen(true)}
                    onContact={() => setIsContactOpen(true)}
                />
                <Hero />
                <ProductGrid 
                    onAddToCart={addToCart}
                    wishlistedItems={wishlistedItems}
                    onToggleWishlist={toggleWishlist}
                    onViewDetails={handleViewDetails}
                />
                <Newsletter />
                <Footer />
                
                {isCartOpen && (
                    <Cart 
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        cartItems={cartItems}
                        onUpdateQuantity={updateQuantity}
                        onRemoveItem={removeFromCart}
                        onCheckout={handleCheckout}
                    />
                )}
                
                {isCheckoutOpen && (
                    <Checkout
                        isOpen={isCheckoutOpen}
                        onClose={() => setIsCheckoutOpen(false)}
                        cartItems={cartItems}
                        total={checkoutTotal}
                        onOrderComplete={handleOrderComplete}
                    />
                )}
                
                {isOrderStatusOpen && (
                    <OrderStatus
                        isOpen={isOrderStatusOpen}
                        onClose={() => setIsOrderStatusOpen(false)}
                        order={currentOrder}
                    />
                )}
                
                {isWishlistOpen && (
                    <WishlistPage
                        isOpen={isWishlistOpen}
                        onClose={() => setIsWishlistOpen(false)}
                        wishlistedItems={wishlistedItems}
                        onAddToCart={addToCart}
                        onToggleWishlist={toggleWishlist}
                    />
                )}

                {isCustomOrderOpen && (
                    <CustomOrderPage
                        isOpen={isCustomOrderOpen}
                        onClose={() => setIsCustomOrderOpen(false)}
                        onSubmitOrder={() => setIsCustomOrderOpen(false)}
                    />
                )}

                {isAboutOpen && (
                    <AboutPage
                        isOpen={isAboutOpen}
                        onClose={() => setIsAboutOpen(false)}
                    />
                )}

                {isContactOpen && (
                    <ContactPage
                        isOpen={isContactOpen}
                        onClose={() => setIsContactOpen(false)}
                    />
                )}

                {isProductDetailsOpen && (
                    <ProductDetails
                        product={selectedProduct}
                        isOpen={isProductDetailsOpen}
                        onClose={() => setIsProductDetailsOpen(false)}
                        onAddToCart={addToCart}
                        onToggleWishlist={toggleWishlist}
                        isWishlisted={selectedProduct ? wishlistedItems.has(selectedProduct.id) : false}
                    />
                )}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
