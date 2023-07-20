// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Add your Firebase configuration here
  // Refer to the Firebase documentation for more details
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;

