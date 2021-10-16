import firebase from 'firebase';
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDYOAsuUImilMcMnEp8Q6fH7rLHhM0yOX4',
	authDomain: 'rew-fire.firebaseapp.com',
	projectId: 'rew-fire',
	storageBucket: 'rew-fire.appspot.com',
	messagingSenderId: '418308274691',
	appId: '1:418308274691:web:42355c308b2c78b031ec36',
	measurementId: 'G-RQX3ZTG8CH'
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
