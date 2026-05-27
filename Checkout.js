function Checkout({ isOpen, onClose, cartItems, total, onOrderComplete }) {
    try {
        const [step, setStep] = React.useState(1);
        const [orderData, setOrderData] = React.useState({
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zipCode: '',
            country: 'US'
        });

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleInputChange = (field, value) => {
            setOrderData(prev => ({ ...prev, [field]: value }));
        };

        const handleNext = () => {
            if (step < 3) setStep(step + 1);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const orderId = 'ORD-' + Date.now();
            onOrderComplete(orderId, orderData);
            onClose();
        };

        if (!isOpen) return null;

        return (
            <div data-name="checkout" data-file="components/Checkout.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">Checkout</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="flex mb-6">
                                {[1, 2, 3].map(num => (
                                    <div key={num} className={`flex-1 text-center ${step >= num ? 'text-gray-900' : 'text-gray-400'}`}>
                                        <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${step >= num ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                                            {num}
                                        </div>
                                        <span className="text-sm">{num === 1 ? 'Contact' : num === 2 ? 'Shipping' : 'Payment'}</span>
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">Contact Information</h3>
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            value={orderData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="First name"
                                                value={orderData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                className="p-3 border rounded-lg"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last name"
                                                value={orderData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                className="p-3 border rounded-lg"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">Shipping Address</h3>
                                        <input
                                            type="text"
                                            placeholder="Street address"
                                            value={orderData.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                value={orderData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                className="p-3 border rounded-lg"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="ZIP code"
                                                value={orderData.zipCode}
                                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                                className="p-3 border rounded-lg"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">Order Summary</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            {cartItems.map(item => (
                                                <div key={item.id} className="flex justify-between py-2">
                                                    <span>{item.name} x {item.quantity}</span>
                                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                            <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                                                <span>Total:</span>
                                                <span>${total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between mt-6">
                                    {step > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => setStep(step - 1)}
                                            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="ml-auto px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="ml-auto px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                                        >
                                            Place Order
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Checkout component error:', error);
        reportError(error);
    }
}
