import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-AC7DatwxBzP0uMfQOBJ-_Z89LqcSjew",
  authDomain: "usmon-movie-app.firebaseapp.com",
  projectId: "usmon-movie-app",
  storageBucket: "usmon-movie-app.appspot.com",
  messagingSenderId: "1041998262476",
  appId: "1:1041998262476:web:8bd7828e4a8040ba101269"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };