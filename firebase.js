// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXCQSErr3qM_UcOkzeiwW4qAt_S3jhkFU",
  authDomain: "auth-with-mern.firebaseapp.com",
  projectId: "auth-with-mern",
  storageBucket: "auth-with-mern.appspot.com",
  messagingSenderId: "174718147447",
  appId: "1:174718147447:web:4cb320a3beb811d66c9f72",
  measurementId: "G-8QHGRLJ2EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);