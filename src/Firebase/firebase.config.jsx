// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: Import.meta.env.VITE_apiKey,
    authDomain: Import.meta.env.VITE_authDomain,
    projectId: Import.meta.env.VITE_projectId,
    storageBucket: Import.meta.env.VITE_storageBucket,
    messagingSenderId: Import.meta.env.VITE_messagingSenderId,
    appId: Import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;