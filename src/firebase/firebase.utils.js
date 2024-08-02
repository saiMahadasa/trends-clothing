
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
        apiKey: "AIzaSyDALzkQBDx33jiEBepkEQcaM_5E44hlev8",
        authDomain: "trends-db-763f9.firebaseapp.com",
        projectId: "trends-db-763f9",
        storageBucket: "trends-db-763f9.appspot.com",
        messagingSenderId: "887815826730",
        appId: "1:887815826730:web:1d56687dad78137b034253",
        measurementId: "G-0BC5X2VB6S"
      };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account'})
export const signInwithGoogle = () => auth.signInWithPopup(provider)
export default firebase