import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'; // 1. Import the dynamic function
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, appId } from '@/lib/firebase';

// Component Imports
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Notification from '@/components/Notification';
import AuthPage from '@/components/pages/AuthPage';
// Note: ExplorePage is now imported dynamically below

import BookingPage from '@/components/pages/BookingPage';
import RentalsPage from '@/components/pages/RentalsPage';
import AnalyticsPage from '@/components/pages/AnalyticsPage';
import PackagesPage from '@/components/pages/PackagesPage';
import ContactUsPage from '@/components/pages/ContactUsPage';

// 2. Create a dynamically imported version of ExplorePage with SSR turned off.
// This prevents the "window is not defined" error during server-side rendering.
const DynamicExplorePage = dynamic(
    () => import('@/components/pages/ExplorePage'),
    { 
      ssr: false,
      // Optional: Add a loading component while the map is being loaded.
      loading: () => (
          <div className="flex items-center justify-center h-[60vh]">
              <p className="text-gray-400 text-lg">Loading Interactive Map...</p>
          </div>
      )
    }
);


export default function Home() {
    const [activeView, setActiveView] = useState('explore');
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

    // Auth state listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const userDocRef = doc(db, `artifacts/${appId}/users/${currentUser.uid}`);
                    const userDocSnap = await getDoc(userDocRef);
                    if (!userDocSnap.exists()) {
                        await setDoc(userDocRef, {
                            email: currentUser.email,
                            createdAt: new Date(),
                            firstBookingDone: false,
                            provider: currentUser.providerData[0]?.providerId || 'email',
                        });
                    }
                    setUser(currentUser);
                } catch (error) {
                    console.error("Firestore error:", error);
                    showNotification("Could not connect to the database.", "error");
                    setUser(null); 
                }
            } else {
                setUser(null);
            }
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 4000);
    };

    const renderPage = () => {
        switch (activeView) {
            case 'explore':
                // 3. Use the dynamically imported component here
                return <DynamicExplorePage />;
            case 'packages':
                return <PackagesPage />;
            case 'book':
                return <BookingPage showNotification={showNotification} user={user} />;
            case 'rent':
                return <RentalsPage showNotification={showNotification} />;
            case 'analytics':
                return <AnalyticsPage />;
            case 'contact':
                return <ContactUsPage showNotification={showNotification} />;
            default:
                return <DynamicExplorePage />;
        }
    };

    if (!isAuthReady) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
                 <p className="text-lg">Initializing Your Meghalaya Adventure...</p>
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

