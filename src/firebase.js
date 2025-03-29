import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    projectId: "YOUR_PROJECT_ID",
    // No other fields needed for Firestore
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);