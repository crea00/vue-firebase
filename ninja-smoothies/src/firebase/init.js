import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
 var config = {
  apiKey: "AIzaSyD5haS8pDH-g3IS9pW5Dcq9fe6v3-cN_F4",
  authDomain: "udemy-ninja-smoothies-5f1cd.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-5f1cd.firebaseio.com",
  projectId: "udemy-ninja-smoothies-5f1cd",
  storageBucket: "udemy-ninja-smoothies-5f1cd.appspot.com",
  messagingSenderId: "222099028801"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()