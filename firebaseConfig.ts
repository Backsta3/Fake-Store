import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ1su9BVI3g1FbkgLCmVSHIhBaXZbAYjY",
    authDomain: "fake-store-81.firebaseapp.com",
    projectId: "fake-store-81",
    storageBucket: "fake-store-81.appspot.com",
    messagingSenderId: "647505369200",
    appId: "1:647505369200:web:abedf51e186a0a57ec3cb5"
  };


// Initializing Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);