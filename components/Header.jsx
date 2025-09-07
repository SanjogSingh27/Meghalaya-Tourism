import { LogOut, Map, Hotel, Car, BarChart2 } from 'lucide-react';
import { auth, signOut } from '@/lib/firebase';

export default function Header({ activeView, setActiveView, user }) {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            // The onAuthStateChanged listener in index.js will handle the redirect.
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const navItems = [
        { id: 'explore', label: 'Explore', icon: Map },
        { id: 'book', label: 'Book Hotel', icon: Hotel },
        { id: 'rent', label: 'Rent Vehicle', icon: Car },
        { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    ];

    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 shadow-lg shadow-green-500/10">
            <nav className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wider text-white">
                    Meghalaya<span className="text-green-400">Tourism</span>
                </div>
                <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 p-1 rounded-full">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveView(item.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-2 ${
                                activeView === item.id 
                                ? 'bg-green-500 text-white shadow-md' 
                                : 'text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    {/* --- FIX STARTS HERE --- */}
                    {/* We now check if 'user' exists before trying to access 'user.email'. */}
                    {/* We also provide a fallback in case user.email is missing (e.g., for anonymous users). */}
                    {user && (
                         <span className="text-sm text-gray-300 hidden md:block">
                            Welcome, {user.email || 'Guest User'}
                         </span>
                    )}
                    {/* --- FIX ENDS HERE --- */}
                    <button
                        onClick={handleSignOut}
                        className="p-2 rounded-full bg-red-600/80 hover:bg-red-600 transition-colors duration-300"
                        title="Sign Out"
                    >
                        <LogOut className="w-5 h-5 text-white" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

