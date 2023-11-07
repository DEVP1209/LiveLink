import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyBds2hKK1SMtYbCxFs2ZO5buJB_HzmqfHs",
  authDomain: "lively-development.firebaseapp.com",
  projectId: "lively-development",
  storageBucket: "lively-development.appspot.com",
  messagingSenderId: "652619046691",
  appId: "1:652619046691:web:2a627e713c867c99b13696"
});

// Initialize Firebase

export const auth = app.auth()
export default app
