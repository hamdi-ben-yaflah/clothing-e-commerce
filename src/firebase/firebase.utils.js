import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMUIPIfyFfwAhZPKDybkdncj-sN4qDImo",
    authDomain: "e-commercedb-6fdbe.firebaseapp.com",
    databaseURL: "https://e-commercedb-6fdbe.firebaseio.com",
    projectId: "e-commercedb-6fdbe",
    storageBucket: "e-commercedb-6fdbe.appspot.com",
    messagingSenderId: "357506152381",
    appId: "1:357506152381:web:bff231e59bb966f0e7c4d4",
    measurementId: "G-8S6T1HX4SK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('Error creating user ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWhithGoogle = () => auth.signInWithPopup(provider);

export default firebase;