// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmuYUDIDrK1pmhDnWQ4p4JGKSZfpckpqU',
  authDomain: 'king-s-bakery.firebaseapp.com',
  projectId: 'king-s-bakery',
  storageBucket: 'king-s-bakery.appspot.com',
  messagingSenderId: '306880994122',
  appId: '1:306880994122:web:e2d8bfa5c84cc810aa3fb3',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// autenticacion y base de datos con firebase
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const getUserState = () => new Promise((resolve, reject) => { onAuthStateChanged(auth, resolve, reject) })
export { auth, db, getUserState }
