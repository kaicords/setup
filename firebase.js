// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd_R6G5OVpUvBeTmAIoA-VC-yL7wfoCsY",
  authDomain: "fir-au-493d6.firebaseapp.com",
  projectId: "fir-au-493d6",
  storageBucket: "fir-au-493d6.appspot.com",
  messagingSenderId: "1029941525769",
  appId: "1:1029941525769:web:c06c7e8b0c8554508167d8",
  measurementId: "G-34LY6VSPLM"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db };