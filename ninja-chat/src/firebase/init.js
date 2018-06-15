import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_KeNxZzdcWB6roJ5LJrEXqmVpGdjjsnU",
  authDomain: "udemy-ninja-chat-e89c7.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-e89c7.firebaseio.com",
  projectId: "udemy-ninja-chat-e89c7",
  storageBucket: "udemy-ninja-chat-e89c7.appspot.com",
  messagingSenderId: "966488021695"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()