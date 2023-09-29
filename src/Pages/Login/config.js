
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0LSe9xAwnnIJde_t36FWJ4NHDvgA0oSc",
  authDomain: "student-tracker-2ba75.firebaseapp.com",
  projectId: "student-tracker-2ba75",
  storageBucket: "student-tracker-2ba75.appspot.com",
  messagingSenderId: "838137135788",
  appId: "1:838137135788:web:c7920b3a346ed8b5551509",
  measurementId: "G-NE1D7PPHQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
