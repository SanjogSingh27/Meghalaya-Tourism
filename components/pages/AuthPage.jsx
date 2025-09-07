import { useState } from 'react';
import { GoogleIcon, SpinnerIcon } from '@/components/icons';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@/lib/firebase';

export default function AuthPage({ showNotification }) {
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAuthAction = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isLoginView) {
                await signInWithEmailAndPassword(auth, email, password);
                showNotification('Successfully signed in!', 'success');
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                showNotification('Account created successfully! Please sign in.', 'success');
                setIsLoginView(true); // Switch to login view after signup
            }
        } catch (error) {
            console.error("Auth Error:", error);
            showNotification(error.message, 'error');
        }
        setLoading(false);
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            showNotification('Successfully signed in with Google!', 'success');
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            showNotification(error.message, 'error');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">
                        {isLoginView ? 'Welcome Back' : 'Create Your Account'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        {isLoginView ? 'Sign in to continue your adventure' : 'Join us to explore the abode of clouds'}
                    </p>
                </div>
                <form className="space-y-6" onSubmit={handleAuthAction}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                        className="w-full px-4 py-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full px-4 py-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-800 transition-all duration-300 flex items-center justify-center"
                    >
                        {loading && <SpinnerIcon />}
                        {isLoginView ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 text-gray-400 bg-gray-800">Or continue with</span>
                    </div>
                </div>
                <div>
                    <button
                        disabled={loading}
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full py-3 font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-800 transition-all duration-300 flex items-center justify-center"
                    >
                        {loading ? <SpinnerIcon /> : <GoogleIcon />}
                        <span className="ml-3">Sign in with Google</span>
                    </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                    {isLoginView ? "Don't have an account?" : 'Already have an account?'}
                    <button onClick={() => setIsLoginView(!isLoginView)} className="ml-1 font-medium text-green-400 hover:text-green-300">
                        {isLoginView ? 'Sign up' : 'Sign in'}
                    </button>
                </p>
            </div>
        </div>
    );
}

