// This component provides a "Contact Us" page with a functional form.
import { useState } from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';

export default function ContactUsPage({ showNotification }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate an API call
        setTimeout(() => {
            console.log("Form Submitted:", { name, email, message });
            showNotification('Your message has been sent successfully!', 'success');
            // Reset form
            setName('');
            setEmail('');
            setMessage('');
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Get in Touch
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>
            
            <div className="max-w-2xl mx-auto p-8 bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <User className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 pl-10 pr-4"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 pl-10 pr-4"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                         <div className="relative">
                             <span className="absolute top-4 left-0 flex items-center pl-3">
                                <MessageSquare className="h-5 w-5 text-gray-400" />
                            </span>
                            <textarea
                                id="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 pl-10 pr-4"
                                placeholder="Your inquiry or feedback..."
                            ></textarea>
                        </div>
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 mt-4 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-800 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting && (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                 </svg>
                            )}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
