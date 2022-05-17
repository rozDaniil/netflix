import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhArLrAVPriVsIgqQx6IWUBYrFofBF9oA",
    authDomain: "netflix-5db9e.firebaseapp.com",
    projectId: "netflix-5db9e",
    storageBucket: "netflix-5db9e.appspot.com",
    messagingSenderId: "832699077577",
    appId: "1:832699077577:web:3b8c482205ae6211900e18"
};

const app = initializeApp(firebaseConfig);
// export const db = app.firestore()
export const auth = getAuth()