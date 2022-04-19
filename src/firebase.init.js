// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhhTnDn2TvwW-KP3A1tlCsEv_JVjf17VY",
  authDomain: "yoga-international-4373d.firebaseapp.com",
  projectId: "yoga-international-4373d",
  storageBucket: "yoga-international-4373d.appspot.com",
  messagingSenderId: "369107215444",
  appId: "1:369107215444:web:e2209930bd3cfc5fa4f9c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;