import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

const app = firebase.initializeApp(config)

export const authenticator = app.auth()

export const firestore = app.firestore()
export const { Timestamp } = firebase.firestore

Vue.use(firestorePlugin)
