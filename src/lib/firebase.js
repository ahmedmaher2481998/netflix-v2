// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import auth from 'firebase/auth';
import { seedDatabase } from './seed';
import { getFirestore } from 'firebase/firestore';
// inserting data into firestore
// import { getFirestore, collection, doc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'netflix-v2-cf2b0.firebaseapp.com',
  projectId: 'netflix-v2-cf2b0',
  storageBucket: 'netflix-v2-cf2b0.appspot.com',
  messagingSenderId: '423995672107',
  appId: '1:423995672107:web:227e57226f865dd09f8c6e'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// inserting data
// seedDatabase({ addDoc, collection, db });
export { app };
