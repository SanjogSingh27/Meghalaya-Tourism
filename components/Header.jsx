import { LogOut, Map, Hotel, Car, BarChart3, User, Package, Mail } from 'lucide-react';
import { auth, signOut } from '@/lib/firebase';
import Image from 'next/image'; // 1. Import the Next.js Image component

export default function Header({ activeView, setActiveView, user }) {

    const navItems = [
        { id: 'explore', label: 'Explore', icon: Map },
        { id: 'packages', label: 'Packages', icon: Package },
        { id: 'book', label: 'Book Hotel', icon: Hotel },
        { id: 'rent', label: 'Rent Vehicle', icon: Car },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'contact', label: 'Contact Us', icon: Mail },
    ];

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            // The onAuthStateChanged listener in index.js will handle redirecting to the auth page.
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <header className="sticky top-0 bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* --- THIS IS THE CHANGE --- */}
                        {/* The h1 text is replaced with the new logo image */}
                        <div className="cursor-pointer" onClick={() => setActiveView('explore')}>
                            <Image 
                                src="/logo.svg" 
                                alt="CloudCompass Meghalaya Logo" 
                                width={200} 
                                height={40}
                            />
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveView(item.id)}
                                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeView === item.id 
                                    ? 'bg-green-600 text-white' 
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                            >
                                <item.icon className="w-4 h-4 mr-2" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        <div className="flex items-center text-sm text-gray-400 mr-4">
                            <User className="w-4 h-4 mr-2" />
                            <span>{user?.email || 'Guest'}</span>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-colors border border-gray-600 hover:border-red-500"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

             {/* Mobile Navigation */}
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 <div className="flex justify-around flex-wrap">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveView(item.id)}
                            className={`flex flex-col items-center px-2 py-2 w-1/3 sm:w-1/6 rounded-md text-xs font-medium transition-colors ${
                                activeView === item.id 
                                ? 'bg-green-600 text-white' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <item.icon className="w-5 h-5 mb-1" />
                            {item.label}
                        </button>
                    ))}
                 </div>
            </div>
        </header>
    );
}

