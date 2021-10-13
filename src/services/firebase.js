import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDR4XKg1JadgiCLjaX2aRe5KAvLSJBgZdg",
  authDomain: "personal-portfolio-8db06.firebaseapp.com",
  projectId: "personal-portfolio-8db06",
  storageBucket: "personal-portfolio-8db06.appspot.com",
  messagingSenderId: "1084232510110",
  appId: "1:1084232510110:web:a32498cfa20ad56725e98f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};