// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1KbJRVFvB2824B-4GQ-FqShC1J5xyAAk",
  authDomain: "assignment-a99d6.firebaseapp.com",
  projectId: "assignment-a99d6",
  storageBucket: "assignment-a99d6.appspot.com",
  messagingSenderId: "18022341947",
  appId: "1:18022341947:web:020431d503b025b2b8eb1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);