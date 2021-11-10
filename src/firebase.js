import firebase from 'firebase'

// import { initializeApp } from "firebase/app";
import initializeApp from 'firebase/app'

const app = firebase.initializeApp({
        apiKey: "AIzaSyAl6D2de2rJ31qmsaTkIe4UO-7j2fXWPgE",
        authDomain: "instagram-clone-c3125.firebaseapp.com",
        projectId: "instagram-clone-c3125",
        storageBucket: "instagram-clone-c3125.appspot.com",
        messagingSenderId: "792525350903",
        appId: "1:792525350903:web:7b0ec21fc6616559a8b0f2",
        measurementId: "G-9TLGBPH0X3"
})

const db = app.database()
const storage = firebase.storage()
const auth = firebase.auth()

export default {db, storage, auth}