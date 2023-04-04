
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyB7bZoMFRrDzCfb2qmVYpCa3sv_cNUX6ro",
  authDomain: "tiktok---jornadadev-1e3bb.firebaseapp.com",
  projectId: "tiktok---jornadadev-1e3bb",
  storageBucket: "tiktok---jornadadev-1e3bb.appspot.com",
  messagingSenderId: "936045077215",
  appId: "1:936045077215:web:4b84951e2037ccc3e73f6a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;