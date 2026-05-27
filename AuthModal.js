function AuthModal({ isOpen, onClose, onLogin }) {
    try {
        const [isLogin, setIsLogin] = React.useState(true);
        const [formData, setFormData] = React.useState({
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        });

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (isLogin) {
                const user = { email: formData.email, name: formData.firstName || 'User' };
                onLogin(user);
                onClose();
            } else {
                const user = { 
                    email: formData.email, 
                    name: `${formData.firstName} ${formData.lastName}`,
                    id: Date.now()
                };
                await trickleCreateObject('user', user);
                onLogin(user);
                onClose();
            }
        };

        const handleInputChange = (field, value) => {
            setFormData(prev => ({ ...prev, [field]: value }));
        };

        if (!isOpen) return null;

        return (
            <div data-name="auth-modal" data-file="components/AuthModal.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-md w-full">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h2>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            {!isLogin && (
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        className="p-3 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        className="p-3 border rounded-lg"
                                        required
                                    />
                                </div>
                            )}
                            
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                required
                            />
                            
                            <input
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
                            >
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-gray-900 font-medium"
                                >
                                    {isLogin ? 'Sign up' : 'Login'}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AuthModal component error:', error);
        reportError(error);
    }
}
