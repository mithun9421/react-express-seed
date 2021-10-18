import firebase from 'firebase';
// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB_lRV4nY_gyPjQEyzl-J4x4oxQPO98_hI',
	authDomain: 'glc-fbase.firebaseapp.com',
	projectId: 'glc-fbase',
	storageBucket: 'glc-fbase.appspot.com',
	messagingSenderId: '834760266776',
	appId: '1:834760266776:web:5a3124b2b14dbb12075f6d',
	measurementId: 'G-2H9QLGMSH2'
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
