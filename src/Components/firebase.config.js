// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlFh9bqeGWirXoYhx1FpL96QmZxi3fVcE",
  authDomain: "cuisine-craze.firebaseapp.com",
  projectId: "cuisine-craze",
  storageBucket: "cuisine-craze.appspot.com",
  messagingSenderId: "1001123093414",
  appId: "1:1001123093414:web:bce321aed1ddc5ada98d67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
