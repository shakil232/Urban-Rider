import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.confing';

// Initialize Firebase
const firebaseInitialize = () =>{
    initializeApp(firebaseConfig)
}

export default firebaseInitialize;