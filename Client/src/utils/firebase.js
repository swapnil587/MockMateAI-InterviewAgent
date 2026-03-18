// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mockmetaai.firebaseapp.com",
  projectId: "mockmetaai",
  storageBucket: "mockmetaai.firebasestorage.app",
  messagingSenderId: "217804326561",
  appId: "1:217804326561:web:36a8c87191fb73da9bd2e0",
  measurementId: "G-RWGQPTD9Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider= new GoogleAuthProvider()

export {auth,provider}
