// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cc0d3.firebaseapp.com",
  projectId: "mern-blog-cc0d3",
  storageBucket: "mern-blog-cc0d3.appspot.com",
  messagingSenderId: "497131320148",
  appId: "1:497131320148:web:1460647d068ba1499fcec1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);