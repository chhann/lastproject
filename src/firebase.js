import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaX2YaGNzAD8zfDDWyswnL92PQIFvAxCk",
    authDomain: "test-firebase-18e0e.firebaseapp.com",
    projectId: "test-firebase-18e0e",
    storageBucket: "test-firebase-18e0e.appspot.com",
    messagingSenderId: "1015253238706",
    appId: "1:1015253238706:web:5c50147017804fe459daab",
    measurementId: "G-F52637S4L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)