import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBgCG-yxnTCwSbJJVk0c72ciqYQJ-GB_AQ",
    authDomain: "pro-c71-37ca5.firebaseapp.com",
    projectId: "pro-c71-37ca5",
    storageBucket: "pro-c71-37ca5.appspot.com",
    messagingSenderId: "665650887589",
    appId: "1:665650887589:web:d665eee11ca36f3efb064c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
