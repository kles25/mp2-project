import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBcSGrO2UTUwHeIMJi1N4Mg8rT4t3LkqII",
    authDomain: "mp2-project-79f18.firebaseapp.com",
    projectId: "mp2-project-79f18",
    storageBucket: "mp2-project-79f18.appspot.com",
    messagingSenderId: "810903040481",
    appId: "1:810903040481:web:aeb73d1fa86aa5252722a0",
    measurementId: "G-GMP0MLC6NF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);