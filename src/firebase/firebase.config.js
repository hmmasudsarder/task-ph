// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVidokrRcscg1bETZITO2QA1leY9Xihwk",
  authDomain: "task-management-ed81d.firebaseapp.com",
  projectId: "task-management-ed81d",
  storageBucket: "task-management-ed81d.appspot.com",
  messagingSenderId: "881826456818",
  appId: "1:881826456818:web:4996259d392861c92e5c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;