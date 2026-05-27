function ContactPage({ isOpen, onClose }) {
    try {
        const [contactData, setContactData] = React.useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const [isSubmitted, setIsSubmitted] = React.useState(false);

        React.useEffect(() => {
            if (isOpen) {
                lucide.createIcons();
            }
        }, [isSubmitted]);

        const handleInputChange = (field, value) => {
            setContactData(prev => ({ ...prev, [field]: value }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await trickleCreateObject('contact-message', {
                    ...contactData,
                    createdAt: new Date().toISOString()
                });
                setIsSubmitted(true);
                setContactData({ name: '', email: '', subject: '', message: '' });
            } catch (error) {
                console.error('Failed to submit contact form:', error);
            }
        };

        if (!isOpen) return null;

        return (
            <div data-name="contact-page" data-file="components/ContactPage.js" className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">Contact Us</h2>
                            <button 
                                onClick={onClose} 
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl leading-none"
                                type="button"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                                    <p className="text-gray-600 mb-6">
                                        Have questions about our products or need help with a custom order? 
                                        We'd love to hear from you!
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-5 h-5 text-gray-600">✉️</span>
                                            <div>
                                                <p className="font-medium">Email</p>
                                                <p className="text-gray-600">hello@artisanmacrame.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="w-5 h-5 text-gray-600">📞</span>
                                            <div>
                                                <p className="font-medium">Phone</p>
                                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="w-5 h-5 text-gray-600">📍</span>
                                            <div>
                                                <p className="font-medium">Studio Address</p>
                                                <p className="text-gray-600">1234 Artisan Way<br/>Portland, OR 97201</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {isSubmitted ? (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 text-green-500 mx-auto mb-4 text-5xl">✓</div>
                                            <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                                            <p className="text-gray-600">
                                                Thank you for contacting us. We'll get back to you within 24 hours.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                value={contactData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                className="w-full p-3 border rounded-lg"
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                value={contactData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full p-3 border rounded-lg"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                value={contactData.subject}
                                                onChange={(e) => handleInputChange('subject', e.target.value)}
                                                className="w-full p-3 border rounded-lg"
                                                required
                                            />
                                            <textarea
                                                placeholder="Your Message"
                                                value={contactData.message}
                                                onChange={(e) => handleInputChange('message', e.target.value)}
                                                className="w-full p-3 border rounded-lg h-32"
                                                required
                                            ></textarea>
                                            <button
                                                type="submit"
                                                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                                            >
                                                Send Message
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ContactPage component error:', error);
        reportError(error);
    }
}
