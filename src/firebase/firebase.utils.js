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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
