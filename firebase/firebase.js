// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgeMDyp4zVkpR4VzLK58T3mAf44WDPb4E",
  authDomain: "netflix-ai-dff59.firebaseapp.com",
  projectId: "netflix-ai-dff59",
  storageBucket: "netflix-ai-dff59.firebasestorage.app",
  messagingSenderId: "486932615225",
  appId: "1:486932615225:web:57a89f3586f0261bbc3de8",
  measurementId: "G-8VWNE5GBJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);