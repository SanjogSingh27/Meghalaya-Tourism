import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInAnonymously, 
    signInWithCustomToken,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, setLogLevel } from 'firebase/firestore';

// --- PASTE YOUR CONFIGURATION HERE ---
const firebaseConfig = {
  apiKey: "AIzaSyARonrZh16YMX9nO3_LGLVE7SOGSWJUNqg",
  authDomain: "meghalaya-tourism-app.firebaseapp.com",
  projectId: "meghalaya-tourism-app",
  storageBucket: "meghalaya-tourism-app.firebasestorage.app",
  messagingSenderId: "1026236727321",
  appId: "1:1026236727321:web:d8f917d794300b50c6ea88",
  measurementId: "G-PLFV1G88V7"
};


// Initialize Firebase
let app;
let auth;
let db;
const projectId = firebaseConfig.projectId || 'default-project-id';
let appId = typeof __app_id !== 'undefined' ? __app_id : firebaseConfig.projectId;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    setLogLevel('debug');

    if (typeof window !== 'undefined' && !auth.currentUser) {
        (async () => {
            try {
                if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                    await signInWithCustomToken(auth, __initial_auth_token);
                } 
                //else {
                //    await signInAnonymously(auth);
                //}
            } catch (error) {
                console.error("Firebase Auth Error:", error);
            }
        })();
    }

} catch (e) {
    console.error("Firebase initialization error", e);
}

const googleProvider = new GoogleAuthProvider();

export { 
    app, 
    auth, 
    db, 
    appId,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    googleProvider,
    signOut,
    onAuthStateChanged
};

