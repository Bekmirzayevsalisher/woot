

import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARMMxBkmQbxDCBUNwc8YAvYyh0L1-t9pI",
  authDomain: "my-box-d37ac.firebaseapp.com",
  projectId: "my-box-d37ac",
  storageBucket: "my-box-d37ac.appspot.com",
  messagingSenderId: "504196715212",
  appId: "1:504196715212:web:cba954ee919ead6c8c2869",
  measurementId: "G-F2FYMR3P0K"  
  };

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = app.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { db, auth, googleProvider }