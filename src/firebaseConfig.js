import firebase from 'firebase';
import 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAb8VSdNflEN4mur7N2Ba8PKsGsPc2Fh6w",
    authDomain: "skipa-43cff.firebaseapp.com",
    databaseURL: "https://skipa-43cff.firebaseio.com",
    projectId: "skipa-43cff",
    storageBucket: "",
    messagingSenderId: "299430710385",
    appId: "1:299430710385:web:c8dadd022456c920d05fd0"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);