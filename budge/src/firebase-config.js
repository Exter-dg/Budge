// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxQbpjPcpth7qS_WNbStG2bDs6laVLz6o",
  authDomain: "budge-2022.firebaseapp.com",
  projectId: "budge-2022",
  storageBucket: "budge-2022.appspot.com",
  messagingSenderId: "335846449080",
  appId: "1:335846449080:web:381d468dc7faa241adb94d",
  measurementId: "G-SMKW2H8TPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);