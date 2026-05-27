function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
    try {
        const [promoCode, setPromoCode] = React.useState('');
        const [discount, setDiscount] = React.useState(0);
        
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 75 ? 0 : 9.99;
        const total = subtotal - discount + shipping;

        const applyPromo = () => {
            if (promoCode.toLowerCase() === 'welcome10') {
                setDiscount(subtotal * 0.1);
            }
        };

        React.useEffect(() => {
            lucide.createIcons();
        }, [cartItems]);

        if (!isOpen) return null;

        return (
            <div data-name="cart" data-file="components/Cart.js" className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
                <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-lg font-semibold">Shopping Cart ({cartItems.length})</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center text-gray-500 mt-8">
                                    <i data-lucide="shopping-bag" className="w-12 h-12 mx-auto mb-4 text-gray-300"></i>
                                    <p>Your cart is empty</p>
                                    <p className="text-sm mt-2">Add some beautiful macrame pieces!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                            <div className="flex-1">
                                                <h3 className="font-medium text-sm">{item.name}</h3>
                                                <p className="text-gray-600 text-sm">${item.price}</p>
                                                <div className="flex items-center space-x-2 mt-2">
                                                    <button 
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                                    >
                                                        <i data-lucide="minus" className="w-3 h-3"></i>
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                                    >
                                                        <i data-lucide="plus" className="w-3 h-3"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <button 
                                                onClick={() => onRemoveItem(item.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <i data-lucide="trash-2" className="w-4 h-4"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="border-t p-6 space-y-4">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        placeholder="Promo code"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        className="flex-1 border rounded px-3 py-2 text-sm"
                                    />
                                    <button 
                                        onClick={applyPromo}
                                        className="bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300"
                                    >
                                        Apply
                                    </button>
                                </div>
                                
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Subtotal:</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green-600">
                                            <span>Discount:</span>
                                            <span>-${discount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <span>Shipping:</span>
                                        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="border-t pt-2 flex justify-between font-semibold">
                                        <span>Total:</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => onCheckout(total)}
                                    className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Secure Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
