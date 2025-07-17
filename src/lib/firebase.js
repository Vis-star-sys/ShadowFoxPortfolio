// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5jRqD8Sd3dMnwog4lPJfGZN1QVtKekKo",
  authDomain: "my-portfolio-e62a5.firebaseapp.com",
  databaseURL: "https://my-portfolio-e62a5-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-e62a5",
  storageBucket: "my-portfolio-e62a5.firebasestorage.app",
  messagingSenderId: "272494089515",
  appId: "1:272494089515:web:0d95817a2f0299284fe16e",
  measurementId: "G-2F89S0LSGW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
