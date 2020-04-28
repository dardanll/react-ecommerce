import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCm1Ncx3kuVgLlwCFcqgHDBGkv_MhEJq4Q",
  authDomain: "react-e-commerce-d4519.firebaseapp.com",
  databaseURL: "https://react-e-commerce-d4519.firebaseio.com",
  projectId: "react-e-commerce-d4519",
  storageBucket: "react-e-commerce-d4519.appspot.com",
  messagingSenderId: "896890577110",
  appId: "1:896890577110:web:d3852d7e67d31949426977",
  measurementId: "G-QG3MX8LSTW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firestore.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_acount' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
