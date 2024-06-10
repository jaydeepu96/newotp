// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxH15wbShHzexSIqQWkHT9oZU1gDeM00M",
  authDomain: "otpverification-c608f.firebaseapp.com",
  projectId: "otpverification-c608f",
  storageBucket: "otpverification-c608f.appspot.com",
  messagingSenderId: "841599429782",
  appId: "1:841599429782:web:26fe8518459806c3f9e6b7",
  measurementId: "G-Z1CEJZPBCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
