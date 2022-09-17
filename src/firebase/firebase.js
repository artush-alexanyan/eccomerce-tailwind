import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDfvMpcg6Su4xvg4nfFMl3isascHuEGvHM",
    authDomain: "eccomerce-vue.firebaseapp.com",
    projectId: "eccomerce-vue",
    storageBucket: "eccomerce-vue.appspot.com",
    messagingSenderId: "361819117759",
    appId: "1:361819117759:web:b6c9d4c5e78cb16b9f0e0a"
};


firebase.initializeApp(config);

export const firestore = firebase.firestore()
export const Authentication = firebase.auth()


export default firebase