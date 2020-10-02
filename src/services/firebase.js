// import firebase from 'firebase'
import { authenticator } from '@/plugins/firebase'

export const authenticateUser = (email, password) => {
  return new Promise((resolve, reject) => {
    authenticator.signInWithEmailAndPassword(email, password)
      .then(response => resolve(response.user))
      .catch(err => reject(err.message))
  })
}

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    authenticator.signOut()
      .then(() => resolve())
      .catch(err => reject(err))
  })
}
