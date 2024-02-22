// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAjcaEfCcWd8aBnZyqGaIBrn_b2rCfhI3I",
	authDomain: "netflixgpt-475c6.firebaseapp.com",
	projectId: "netflixgpt-475c6",
	storageBucket: "netflixgpt-475c6.appspot.com",
	messagingSenderId: "678447183146",
	appId: "1:678447183146:web:3334cf6f36735eeaf41a53",
	measurementId: "G-EBTF94B0YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
