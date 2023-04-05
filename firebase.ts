import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhVYTOIrfdtycQUEUsH5Xn82RQbhpzz0M",
  authDomain: "chatgpt-responser.firebaseapp.com",
  projectId: "chatgpt-responser",
  storageBucket: "chatgpt-responser.appspot.com",
  messagingSenderId: "395816292029",
  appId: "1:395816292029:web:5dee611044d5659123f1d4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
