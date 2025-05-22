// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiMbdGpAX5vlbHg5b7VPNryC4m-kTV5pI",
    authDomain: "vue-jobs-97686.firebaseapp.com",
    databaseURL: "https://vue-jobs-97686-default-rtdb.firebaseio.com",
    projectId: "vue-jobs-97686",
    storageBucket: "vue-jobs-97686.firebasestorage.app",
    messagingSenderId: "650077228173",
    appId: "1:650077228173:web:a2f1e02195d0c5bf8c66c4",
    measurementId: "G-S6CJB8DQSM"
};
// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
// storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// appId: import.meta.env.VITE_FIREBASE_APP_ID,
// measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// Validate configuration
if (!firebaseConfig.projectId) {
    throw new Error(
        "Firebase config error! Missing projectId. Check your .env and Vercel environment variables."
    );
}
//VUE_APP_FIREBASE_API_KEY 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };