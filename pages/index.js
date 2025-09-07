import { useState, useEffect } from 'react';
import Head from 'next/head';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, appId } from '@/lib/firebase';

// Component Imports
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Notification from '@/components/Notification';
import AuthPage from '@/components/pages/AuthPage';
import ExplorePage from '@/components/pages/ExplorePage';
import BookingPage from '@/components/pages/BookingPage';
import RentalsPage from '@/components/pages/RentalsPage';
import AnalyticsPage from '@/components/pages/AnalyticsPage';

export default function Home() {
    const [activeView, setActiveView] = useState('explore');
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

    // Auth state listener with detailed logging
    useEffect(() => {
        console.log("Setting up auth state listener...");
        
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log("Auth state changed. currentUser:", currentUser ? currentUser.uid : null);

            if (currentUser) {
                if (!appId || appId === 'default-app-id') {
                    console.error("CRITICAL: Firebase App ID is not defined or is default! Firestore operations will fail.");
                    showNotification("Application is not configured correctly. Please contact support.", "error");
                    setIsAuthReady(true);
                    setUser(null);
                    return; 
                }

                try {
                    // --- THE FIX IS HERE ---
                    // The path now correctly points to a document with an even number of segments.
                    // The incorrect '/profile' segment has been removed.
                    const userDocRef = doc(db, `artifacts/${appId}/users/${currentUser.uid}`);
                    console.log(`Attempting to access Firestore path: ${userDocRef.path}`);
                    
                    const userDocSnap = await getDoc(userDocRef);

                    if (!userDocSnap.exists()) {
                        console.log("User profile does not exist. Creating new profile...");
                        await setDoc(userDocRef, {
                            email: currentUser.email,
                            createdAt: new Date(),
                            firstBookingDone: false,
                            provider: currentUser.providerData[0]?.providerId || 'email',
                        });
                        console.log("Successfully created user profile.");
                    } else {
                        console.log("User profile already exists.");
                    }
                    
                    console.log("Setting user state to log them into the main application.");
                    setUser(currentUser); 

                } catch (error) {
                    console.error("Firestore error on user profile creation/retrieval:", error);
                    showNotification("Could not connect to the database. Check Firestore rules and network.", "error");
                    setUser(null); 
                }
            } else {
                console.log("No user is authenticated. Resetting user state.");
                setUser(null);
            }
            
            console.log("Authentication check finished. Setting isAuthReady to true.");
            setIsAuthReady(true);
        });

        return () => {
            console.log("Cleaning up auth state listener.");
            unsubscribe();
        }
    }, []);

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 4000);
    };

    const renderPage = () => {
        switch (activeView) {
            case 'explore':
                return <ExplorePage />;
            case 'book':
                return <BookingPage showNotification={showNotification} user={user} />;
            case 'rent':
                return <RentalsPage showNotification={showNotification} />;
            case 'analytics':
                return <AnalyticsPage />;
            default:
                return <ExplorePage />;
        }
    };

    if (!isAuthReady) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
                <div className="text-center">
                    <svg className="animate-spin h-10 w-10 text-cyan-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="mt-4 text-lg">Initializing Your Meghalaya Adventure...</p>
                </div>
            </div>
        );
    }
    
    if (!user) {
        return <AuthPage showNotification={showNotification} />;
    }

    return (
        <>
            <Head>
                <title>Meghalaya Tourism - Abode of Clouds</title>
                <meta name="description" content="A dynamic tourism booking and management system for Meghalaya." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-900 min-h-screen flex flex-col font-sans text-white">
                <Header activeView={activeView} setActiveView={setActiveView} user={user} />
                <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    {renderPage()}
                </main>
                {notification.show && <Notification message={notification.message} type={notification.type} onClose={() => setNotification({ show: false, message: '', type: 'success' })}/>}
                <Footer />
            </div>
        </>
    );
}

