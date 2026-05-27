function UserProfile({ isOpen, onClose, user, onUpdateUser }) {
    try {
        const [activeTab, setActiveTab] = React.useState('profile');
        const [profileData, setProfileData] = React.useState({
            firstName: user?.name?.split(' ')[0] || '',
            lastName: user?.name?.split(' ')[1] || '',
            email: user?.email || '',
            phone: ''
        });
        const [orders, setOrders] = React.useState([]);

        React.useEffect(() => {
            lucide.createIcons();
            if (user) {
                loadUserOrders();
            }
        }, [user]);

        const loadUserOrders = async () => {
            try {
                const result = await trickleListObjects(`order:${user.id}`, 50, true);
                setOrders(result.items);
            } catch (error) {
                console.error('Failed to load orders:', error);
            }
        };

        const handleProfileUpdate = async (e) => {
            e.preventDefault();
            const updatedUser = {
                ...user,
                name: `${profileData.firstName} ${profileData.lastName}`,
                phone: profileData.phone
            };
            await trickleUpdateObject('user', user.id, updatedUser);
            onUpdateUser(updatedUser);
        };

        if (!isOpen) return null;

        return (
            <div data-name="user-profile" data-file="components/UserProfile.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">My Account</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <div className="flex border-b">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`px-6 py-3 ${activeTab === 'profile' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-600'}`}
                            >
                                Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`px-6 py-3 ${activeTab === 'orders' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-600'}`}
                            >
                                Orders
                            </button>
                        </div>

                        <div className="p-6">
                            {activeTab === 'profile' && (
                                <form onSubmit={handleProfileUpdate} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            value={profileData.firstName}
                                            onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                                            className="p-3 border rounded-lg"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            value={profileData.lastName}
                                            onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                                            className="p-3 border rounded-lg"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={profileData.email}
                                        className="w-full p-3 border rounded-lg bg-gray-50"
                                        disabled
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={profileData.phone}
                                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                                        className="w-full p-3 border rounded-lg"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
                                    >
                                        Update Profile
                                    </button>
                                </form>
                            )}

                            {activeTab === 'orders' && (
                                <div className="space-y-4">
                                    {orders.length === 0 ? (
                                        <p className="text-center text-gray-500 py-8">No orders found</p>
                                    ) : (
                                        orders.map(order => (
                                            <div key={order.objectId} className="border rounded-lg p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h4 className="font-medium">Order #{order.objectData.id}</h4>
                                                        <p className="text-sm text-gray-600">
                                                            {new Date(order.objectData.date).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                                        Processing
                                                    </span>
                                                </div>
                                                <p className="text-lg font-semibold">${order.objectData.total.toFixed(2)}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('UserProfile component error:', error);
        reportError(error);
    }
}
