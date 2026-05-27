function AddressBook({ isOpen, onClose, user, onSelectAddress }) {
    try {
        const [addresses, setAddresses] = React.useState([]);
        const [isAddingNew, setIsAddingNew] = React.useState(false);
        const [newAddress, setNewAddress] = React.useState({
            name: '',
            address: '',
            city: '',
            zipCode: '',
            isDefault: false
        });

        React.useEffect(() => {
            lucide.createIcons();
            if (user) {
                loadAddresses();
            }
        }, [user]);

        const loadAddresses = async () => {
            try {
                const result = await trickleListObjects(`address:${user.id}`, 20, true);
                setAddresses(result.items);
            } catch (error) {
                console.error('Failed to load addresses:', error);
            }
        };

        const handleAddAddress = async (e) => {
            e.preventDefault();
            try {
                await trickleCreateObject(`address:${user.id}`, newAddress);
                setNewAddress({ name: '', address: '', city: '', zipCode: '', isDefault: false });
                setIsAddingNew(false);
                loadAddresses();
            } catch (error) {
                console.error('Failed to add address:', error);
            }
        };

        const handleDeleteAddress = async (addressId) => {
            try {
                await trickleDeleteObject(`address:${user.id}`, addressId);
                loadAddresses();
            } catch (error) {
                console.error('Failed to delete address:', error);
            }
        };

        if (!isOpen) return null;

        return (
            <div data-name="address-book" data-file="components/AddressBook.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">Address Book</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-medium">Saved Addresses</h3>
                                <button 
                                    onClick={() => setIsAddingNew(true)}
                                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                                >
                                    Add New Address
                                </button>
                            </div>

                            {isAddingNew && (
                                <form onSubmit={handleAddAddress} className="mb-6 p-4 border rounded-lg">
                                    <h4 className="font-medium mb-4">New Address</h4>
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={newAddress.name}
                                            onChange={(e) => setNewAddress(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            value={newAddress.address}
                                            onChange={(e) => setNewAddress(prev => ({ ...prev, address: e.target.value }))}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                value={newAddress.city}
                                                onChange={(e) => setNewAddress(prev => ({ ...prev, city: e.target.value }))}
                                                className="p-3 border rounded-lg"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="ZIP Code"
                                                value={newAddress.zipCode}
                                                onChange={(e) => setNewAddress(prev => ({ ...prev, zipCode: e.target.value }))}
                                                className="p-3 border rounded-lg"
                                                required
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={newAddress.isDefault}
                                                onChange={(e) => setNewAddress(prev => ({ ...prev, isDefault: e.target.checked }))}
                                                className="mr-2"
                                            />
                                            <label>Make this my default address</label>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg">
                                                Save Address
                                            </button>
                                            <button 
                                                type="button" 
                                                onClick={() => setIsAddingNew(false)}
                                                className="border border-gray-300 px-4 py-2 rounded-lg"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}

                            <div className="space-y-4">
                                {addresses.map(address => (
                                    <div key={address.objectId} className="border rounded-lg p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium">{address.objectData.name}</h4>
                                                <p className="text-gray-600 text-sm">
                                                    {address.objectData.address}<br/>
                                                    {address.objectData.city}, {address.objectData.zipCode}
                                                </p>
                                                {address.objectData.isDefault && (
                                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mt-2 inline-block">
                                                        Default
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex space-x-2">
                                                <button 
                                                    onClick={() => onSelectAddress(address.objectData)}
                                                    className="text-blue-600 hover:text-blue-800 text-sm"
                                                >
                                                    Select
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteAddress(address.objectId)}
                                                    className="text-red-600 hover:text-red-800 text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AddressBook component error:', error);
        reportError(error);
    }
}
