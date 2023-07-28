import { initializeApp } from "firebase/app";
import dotenv from 'dotenv';
import path from "path";

const dotEnvPath =path.resolve('/home/dheeraj/Documents/GitHub/BookStore_Flutter_Node/.env');
dotenv.config({path:dotEnvPath});

const firebaseConfig ={
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
};
const firebaseApp =initializeApp(firebaseConfig);


export default firebaseApp;