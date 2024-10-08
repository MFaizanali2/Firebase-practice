// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyB73Kv1cQ3pTV19I5nqReVGtxX0FprbtsQ",
    authDomain: "login-form-e13ad.firebaseapp.com",
    projectId: "login-form-e13ad",
    storageBucket: "login-form-e13ad.appspot.com",
    messagingSenderId: "410563988751",
    appId: "1:410563988751:web:ad59726ff38a8742db427a",
    measurementId: "G-NG4MQ2N0G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged }