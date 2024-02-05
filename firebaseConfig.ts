import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
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
export const FIREBASE_APP = initializeAuth(APP , {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_AUTH = getAuth(APP);