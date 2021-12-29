
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, setDoc, collection, getDocs, getDoc, serverTimestamp, orderBy, query } from 'firebase/firestore/lite'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
// import initializeApp from 'firebase/app'

// const firebaseConfig = {
//     apiKey: "AIzaSyAl6D2de2rJ31qmsaTkIe4UO-7j2fXWPgE",
//     authDomain: "instagram-clone-c3125.firebaseapp.com",
//     projectId: "instagram-clone-c3125",
//     storageBucket: "instagram-clone-c3125.appspot.com",
//     messagingSenderId: "792525350903",
//     appId: "1:792525350903:web:7b0ec21fc6616559a8b0f2",
//     measurementId: "G-9TLGBPH0X3"
// }

// const firebaseApp = initializeApp(firebaseConfig)

const firebaseApp = initializeApp({
        apiKey: "AIzaSyAl6D2de2rJ31qmsaTkIe4UO-7j2fXWPgE",
        authDomain: "instagram-clone-c3125.firebaseapp.com",
        projectId: "instagram-clone-c3125",
        storageBucket: "instagram-clone-c3125.appspot.com",
        messagingSenderId: "792525350903",
        appId: "1:792525350903:web:7b0ec21fc6616559a8b0f2",
        measurementId: "G-9TLGBPH0X3"
});

const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage();

// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()

export { 
        db, 
        auth, 
        storage,
        query,
        orderBy,
        addDoc,
        setDoc, 
        doc,
        ref, 
        uploadBytes, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        onAuthStateChanged, 
        collection, 
        getDocs,
        getDoc,
        serverTimestamp 
};
// export { db, auth, storage }
// export default firebase;