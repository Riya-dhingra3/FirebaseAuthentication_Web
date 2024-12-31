import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3qBE_0vT5N63Uj4uD1RlK26vfbvp_kSU",
  authDomain: "fir-practiseweb.firebaseapp.com",
  projectId: "fir-practiseweb",
  storageBucket: "fir-practiseweb.appspot.com",
  messagingSenderId: "995944419713",
  appId: "1:995944419713:web:3449b73fac9ec611d39880",
  measurementId: "G-ZGQEB885Q9",
  databaseURL: "https://fir-practiseweb-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
