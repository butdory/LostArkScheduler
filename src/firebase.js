// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi_G-a6mBrVSgEpVPnr5vqYZgJOUK4Ctk",
    authDomain: "lostarkscheduler-6ca01.firebaseapp.com",
    projectId: "lostarkscheduler-6ca01",
    storageBucket: "lostarkscheduler-6ca01.appspot.com",
    messagingSenderId: "39448859551",
    appId: "1:39448859551:web:0ecf8a55b0e4cc01e163aa",
    measurementId: "G-SYH7B2M31E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);