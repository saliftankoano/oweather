// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwi22yUEiQyRHnCCG-vvvB5TH1DY8gKXw",
  authDomain: "flexifit-e1453.firebaseapp.com",
  projectId: "flexifit-e1453",
  storageBucket: "flexifit-e1453.appspot.com",
  messagingSenderId: "625793640583",
  appId: "1:625793640583:web:619d666115ef56d332b022",
  measurementId: "G-JYFZYYRNMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export { auth };