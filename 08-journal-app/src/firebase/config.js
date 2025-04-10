// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3eQojveIKBvZnJ89XxlOLz6Oz56fOL2g",
  authDomain: "react-cursos-31df1.firebaseapp.com",
  projectId: "react-cursos-31df1",
  storageBucket: "react-cursos-31df1.firebasestorage.app",
  messagingSenderId: "353981065341",
  appId: "1:353981065341:web:f95f6f7cb79b53d1f1e914"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );

