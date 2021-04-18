import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAS71-Z5fKujb_PYAhmRFUqnNUwmX6zXWs",
    authDomain: "react-login-email-password.firebaseapp.com",
    projectId: "react-login-email-password",
    storageBucket: "react-login-email-password.appspot.com",
    messagingSenderId: "430042004709",
    appId: "1:430042004709:web:64bc2bf50ca07716af280c",
    measurementId: "G-WRGF7ZZ0S6"

};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
