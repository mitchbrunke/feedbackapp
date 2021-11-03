// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGDHFBUUushxD_XXp08Nkali8fd3SjSZs",
  authDomain: "feedbackapp-2a58b.firebaseapp.com",
  projectId: "feedbackapp-2a58b",
  storageBucket: "feedbackapp-2a58b.appspot.com",
  messagingSenderId: "942849398879",
  appId: "1:942849398879:web:32f35aec9e1184532be3ea",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init storage

export { db };
