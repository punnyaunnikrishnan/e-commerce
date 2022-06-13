import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8uUz848K8th2snz4KXfbKPH4N30dVpdo",
  authDomain: "challenge-bb579.firebaseapp.com",
  projectId: "challenge-bb579",
  storageBucket: "challenge-bb579.appspot.com",
  messagingSenderId: "540112894374",
  appId: "1:540112894374:web:f288b612b22076fdce3767",
  measurementId: "G-P1B3GZJK25"
};
const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db,auth};