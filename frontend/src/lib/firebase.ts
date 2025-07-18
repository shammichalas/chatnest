
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB70MEB2mV35DU_PBhYB666YJAFNfY-yvg",
  authDomain: "chatgpt-a558b.firebaseapp.com",
  projectId: "chatgpt-a558b",
  storageBucket: "chatgpt-a558b.firebasestorage.app",
  messagingSenderId: "791691609403",
  appId: "1:791691609403:web:725133c1410872986d231e",
  measurementId: "G-DDY80KYZ91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default app;
