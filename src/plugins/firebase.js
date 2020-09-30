import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD1ioyomjfUwm8lKA-Uf-GW0o-oe4zmM0s',
  authDomain: 'zoomba-d3c44.firebaseapp.com',
  databaseURL: 'https://zoomba-d3c44.firebaseio.com',
  projectId: 'zoomba-d3c44',
  storageBucket: 'zoomba-d3c44.appspot.com',
  messagingSenderId: '583813696802',
  appId: '1:583813696802:web:02cef7b2466f04dea3e97b',
  measurementId: 'G-XV3N7PS2KE'
}

const app = firebase.initializeApp(config)

export const authenticator = app.auth()

export const firestore = app.firestore()
