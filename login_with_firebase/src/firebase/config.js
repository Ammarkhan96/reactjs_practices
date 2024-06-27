// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR5xNy3hS0NVbo2Bib_FVIXyaxb9R8sz8",
  authDomain: "users-60cc1.firebaseapp.com",
  projectId: "users-60cc1",
  storageBucket: "users-60cc1.appspot.com",
  messagingSenderId: "367332193739",
  appId: "1:367332193739:web:fb1d35dadbccdcfaf7324e",
  measurementId: "G-DL2R19PP3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)