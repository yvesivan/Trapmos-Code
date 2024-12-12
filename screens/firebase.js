import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // This imports the authentication service

const firebaseConfig = {
  apiKey: 'AIzaSyBq7hurVJd7mPafAt4HU-8TN63-Xgf8EsU',  // Replace with your Firebase API key
  authDomain: 'trapmos-team-53.firebaseapp.com',  // Replace with your Firebase Auth domain
  projectId: 'trapmos-team-53',  // Replace with your Firebase project ID
  storageBucket: 'trapmos-team-53.firebasestorage.app',  // Replace with your Firebase storage bucket
  messagingSenderId: '70157587374',  // Replace with your messaging sender ID
  appId: '1:70157587374:web:ccd8c3b95d56a533252e3f',  // Replace with your app ID
  measurementId: 'G-TG1FR4F96P',  // Optional (if you use analytics)
};

const app = initializeApp(firebaseConfig);  // Initialize Firebase app

const auth = getAuth(app);  // Initialize Firebase Authentication

export { auth };  // Export the auth object
