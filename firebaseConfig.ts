import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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
const APP = initializeApp(firebaseConfig);

// Firebase Authentication with persistence
export const FIREBASE_AUTH = initializeAuth(APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

// Initializing Firestore
export const FIREBASE_DB = getFirestore(APP);