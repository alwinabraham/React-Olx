import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5lrrzTaNFXOnpwksPdu775lORaNl4Ybs",
  authDomain: "fir-62d4e.firebaseapp.com",
  projectId: "fir-62d4e",
  storageBucket: "fir-62d4e.appspot.com",
  messagingSenderId: "343474267403",
  appId: "1:343474267403:web:4cce6db5d5f59758df2e0e",
  measurementId: "G-LL54YT8ZBM"
};

export default firebase.initializeApp(firebaseConfig)