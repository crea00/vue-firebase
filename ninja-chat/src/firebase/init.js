import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBz1BmWv0Rzs54ODSIIxwVhjL7Ia94Ungo",
  authDomain: "udemy-ninja-chat-24cad.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-24cad.firebaseio.com",
  projectId: "udemy-ninja-chat-24cad",
  storageBucket: "",
  messagingSenderId: "876474863311"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()