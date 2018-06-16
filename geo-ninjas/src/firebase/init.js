import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDTjgQdIfdvWi3XVSIPAGFbxcjbHJH55-M",
  authDomain: "udemy-geo-ninjas-6cbad.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninjas-6cbad.firebaseio.com",
  projectId: "udemy-geo-ninjas-6cbad",
  storageBucket: "udemy-geo-ninjas-6cbad.appspot.com",
  messagingSenderId: "569262868196"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();