// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7tGQPLsnGnz9y11MiBGbE7ZOL_t4yoH4",
  authDomain: "vite-contact-388de.firebaseapp.com",
  projectId: "vite-contact-388de",
  storageBucket: "vite-contact-388de.firebasestorage.app",
  messagingSenderId: "272712787190",
  appId: "1:272712787190:web:832af8ac11712d6985f8d7",
  measurementId: "G-NYD02CMVTJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
