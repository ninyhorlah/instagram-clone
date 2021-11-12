
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import { getStorage } from 'firebase/storage'
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
// const storage = getStorage();

// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, getDocs };
// export { db, auth, storage }
// export default firebase;