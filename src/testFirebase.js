import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl6D2de2rJ31qmsaTkIe4UO-7j2fXWPgE",
    authDomain: "instagram-clone-c3125.firebaseapp.com",
    projectId: "instagram-clone-c3125",
    storageBucket: "instagram-clone-c3125.appspot.com",
    messagingSenderId: "792525350903",
    appId: "1:792525350903:web:7b0ec21fc6616559a8b0f2",
    measurementId: "G-9TLGBPH0X3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database

export {db, collection, getDocs}