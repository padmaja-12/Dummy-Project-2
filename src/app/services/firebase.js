import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'

const config = {
    apiKey: "AIzaSyAMTyABwhjOHOu7K2NAmyBDhsEg-5ZeAHc",
    authDomain: "dummy-project-97ef5.firebaseapp.com",
    databaseURL: "https://dummy-project-97ef5.firebaseio.com",
    projectId: "dummy-project-97ef5",
    storageBucket: "dummy-project-97ef5.appspot.com",
    messagingSenderId: "391398956344",
    appId: "1:391398956344:web:ebc82582944bc0bd1bf5cd",
    measurementId: "G-PN8TJMDN39"
}

firebase.initializeApp(config);

export default firebase;
