// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl8_HI4UEIrfSBR3yeDx6XxrApo7S7zIc",
  authDomain: "fir-auth-16380.firebaseapp.com",
  projectId: "fir-auth-16380",
  storageBucket: "fir-auth-16380.appspot.com",
  messagingSenderId: "557967421167",
  appId: "1:557967421167:web:ef222bebb9f88a754b351a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);