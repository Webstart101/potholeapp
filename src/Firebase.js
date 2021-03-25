import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-storage";
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId:  process.env.REACT_APP_FIREBASE_ID,
    measurementId:  process.env.REACT_APP_FIREBASE_MEASURMENTID
})

const google = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const auth = app.auth();
const db = firebase.firestore();

export{
    auth, google, storage, db, firebase as default
}