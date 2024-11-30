// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRVwXREcrdw2FrfnZKNDEBPTLLt_iXacc",
    authDomain: "weather-app-ac2d5.firebaseapp.com",
    projectId: "weather-app-ac2d5",
    storageBucket: "weather-app-ac2d5.firebasestorage.app",
    messagingSenderId: "838276442061",
    appId: "1:838276442061:web:19b524cfd62e39b29a0684",
    measurementId: "G-CFM7KH9M2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);