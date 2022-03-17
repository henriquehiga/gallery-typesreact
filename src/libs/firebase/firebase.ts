import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyASnzUbtorvyhRAv_Ykd2KAELTemSsjREY",
  authDomain: "gallerytypescript.firebaseapp.com",
  projectId: "gallerytypescript",
  storageBucket: "gallerytypescript.appspot.com",
  messagingSenderId: "796061163378",
  appId: "1:796061163378:web:346d76114dc7e486d3c7eb"


  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID

};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);