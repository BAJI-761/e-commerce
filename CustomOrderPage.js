function CustomOrderPage({ isOpen, onClose, onSubmitOrder }) {
    try {
        const [orderData, setOrderData] = React.useState({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            dimensions: '',
            colors: '',
            description: '',
            budget: '',
            deadline: '',
            inspiration: ''
        });

        React.useEffect(() => {
            if (isOpen) {
                lucide.createIcons();
            }
        }, [isOpen]);

        const handleInputChange = (field, value) => {
            setOrderData(prev => ({ ...prev, [field]: value }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await trickleCreateObject('custom-order', {
                    ...orderData,
                    status: 'pending',
                    createdAt: new Date().toISOString()
                });
                onSubmitOrder(orderData);
                setOrderData({
                    name: '', email: '', phone: '', projectType: '', dimensions: '',
                    colors: '', description: '', budget: '', deadline: '', inspiration: ''
                });
                onClose();
            } catch (error) {
                console.error('Failed to submit custom order:', error);
            }
        };

        if (!isOpen) return null;

        return (
            <div data-name="custom-order-page" data-file="components/CustomOrderPage.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">Custom Order Request</h2>
                            <button 
                                onClick={onClose} 
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl leading-none"
                                type="button"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={orderData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="p-3 border rounded-lg"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={orderData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="p-3 border rounded-lg"
                                    required
                                />
                            </div>

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={orderData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                required
                            />

                            <select
                                value={orderData.projectType}
                                onChange={(e) => handleInputChange('projectType', e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                required
                            >
                                <option value="">Select Project Type</option>
                                <option value="wall-hanging">Wall Hanging</option>
                                <option value="plant-hanger">Plant Hanger</option>
                                <option value="curtain">Curtain/Room Divider</option>
                                <option value="bag">Custom Bag</option>
                                <option value="other">Other</option>
                            </select>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Dimensions (e.g., 24 x 36 inches)"
                                    value={orderData.dimensions}
                                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                                    className="p-3 border rounded-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Preferred Colors"
                                    value={orderData.colors}
                                    onChange={(e) => handleInputChange('colors', e.target.value)}
                                    className="p-3 border rounded-lg"
                                />
                            </div>

                            <textarea
                                placeholder="Project Description & Special Requirements"
                                value={orderData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                className="w-full p-3 border rounded-lg h-24"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Submit Custom Order Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CustomOrderPage component error:', error);
        reportError(error);
    }
}
