import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import jobsData from "./jobs.json"; 

// Your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

async function migrate() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
        for (const job of jobsData) {
            await addDoc(collection(db, "jobs"), {
                ...job,
                createdAt: new Date().toISOString() // Add timestamp
            });
            console.log(`Migrated: ${job.title}`);
        }
        console.log("Migration complete!");
        process.exit(0);
    } catch (error) {
        console.error("Migration failed:", error);
        process.exit(1);
    }
}

migrate();