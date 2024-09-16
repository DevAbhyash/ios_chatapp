// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXx6YeK1iug3_hGh-WFlDlDZhui8piv3M",
  authDomain: "ioschatapp-872b3.firebaseapp.com",
  projectId: "ioschatapp-872b3",
  storageBucket: "ioschatapp-872b3.appspot.com",
  messagingSenderId: "902024786946",
  appId: "1:902024786946:web:74e8e90822429ba871631b",
  measurementId: "G-B3ET0NREDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
