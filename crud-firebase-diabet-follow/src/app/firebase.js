//https://stackoverflow.com/questions/69799682/firebase-analytics-with-next-js-window-not-defined

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAR3ZyHsRD_3JymbRTn41-sDnGzvzXUB5g",
  authDomain: "crud-firebase-1c0dd.firebaseapp.com",
  projectId: "crud-firebase-1c0dd",
  storageBucket: "crud-firebase-1c0dd.appspot.com",
  messagingSenderId: "275196681487",
  appId: "1:275196681487:web:0c7875c302c0acd5ff327a",
  measurementId: "G-VC3EY3FRTX"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore(app)

const analytics =
  app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;

export {auth, db, analytics}
