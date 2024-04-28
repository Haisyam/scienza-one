// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBQjSQIFYEmZzfkp3o6UbNawixAKxTaLTY",
  authDomain: "kelasalifirmansma.firebaseapp.com",
  projectId: "kelasalifirmansma",
  storageBucket: "kelasalifirmansma.appspot.com",
  messagingSenderId: "19922868650",
  appId: "1:19922868650:web:33bcf6e6d4a5f1ca1a33d3",
  measurementId: "G-ZE21TTBKC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();