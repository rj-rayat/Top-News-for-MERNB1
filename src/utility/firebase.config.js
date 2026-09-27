// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPilyLp0mOb08J0JFxbaD8DmZKXzYtNZg",
  authDomain: "topnews-d845b.firebaseapp.com",
  projectId: "topnews-d845b",
  storageBucket: "topnews-d845b.firebasestorage.app",
  messagingSenderId: "686800168368",
  appId: "1:686800168368:web:ce80fde4d5d819cbaf6275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);