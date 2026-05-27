function OrderStatus({ isOpen, onClose, order }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const statusSteps = [
            { id: 1, name: 'Order Placed', icon: 'check-circle', completed: true },
            { id: 2, name: 'Processing', icon: 'clock', completed: true },
            { id: 3, name: 'Shipped', icon: 'truck', completed: false },
            { id: 4, name: 'Delivered', icon: 'package', completed: false }
        ];

        if (!isOpen || !order) return null;

        return (
            <div data-name="order-status" data-file="components/OrderStatus.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-md w-full">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">Order Status</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                                <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                            </div>

                            <div className="space-y-4">
                                {statusSteps.map((step, index) => (
                                    <div key={step.id} className="flex items-center space-x-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                            step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                                        }`}>
                                            <i data-lucide={step.icon} className="w-5 h-5"></i>
                                        </div>
                                        <div className="flex-1">
                                            <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                                                {step.name}
                                            </p>
                                            {step.completed && index < 2 && (
                                                <p className="text-sm text-gray-500">
                                                    {index === 0 ? 'Your order has been confirmed' : 'Your order is being prepared'}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Shipping Address</h4>
                                <p className="text-sm text-gray-600">
                                    {order.customerInfo.firstName} {order.customerInfo.lastName}<br/>
                                    {order.customerInfo.address}<br/>
                                    {order.customerInfo.city}, {order.customerInfo.zipCode}
                                </p>
                            </div>

                            <button 
                                onClick={onClose}
                                className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('OrderStatus component error:', error);
        reportError(error);
    }
}
