function Newsletter() {
    try {
        const [email, setEmail] = React.useState('');
        const [isSubscribed, setIsSubscribed] = React.useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            if (email) {
                setIsSubscribed(true);
                setEmail('');
            }
        };

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <section data-name="newsletter" data-file="components/Newsletter.js" className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <i data-lucide="mail" className="w-8 h-8 text-white"></i>
                        </div>
                        
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Stay Connected with Artisan Updates
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get exclusive access to new collections, behind-the-scenes content, and special offers. 
                            Join our community of macrame enthusiasts.
                        </p>
                        
                        {isSubscribed ? (
                            <div className="flex items-center justify-center space-x-2 text-green-600">
                                <i data-lucide="check-circle" className="w-5 h-5"></i>
                                <span className="font-medium">Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn-primary text-white px-6 py-3 rounded-xl font-medium whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                        
                        <p className="text-xs text-gray-500 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Newsletter component error:', error);
        reportError(error);
    }
}
