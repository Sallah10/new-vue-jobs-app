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
    projectId: "vue-jobs-97686",
    storageBucket: "vue-jobs-97686.firebasestorage.app",
    messagingSenderId: "650077228173",
    appId: "1:650077228173:web:a2f1e02195d0c5bf8c66c4",
    measurementId: "G-S6CJB8DQSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };