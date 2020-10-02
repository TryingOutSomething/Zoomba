import { authenticator } from '@/plugins/firebase'

const _DEFAULT_PASSWORD = '******'

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

const _addDisplayNameToUser = (user, displayName) => {
  return new Promise((resolve, reject) => {
    user.updateProfile({ displayName })
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

export const createUser = (email, displayName) => {
  return new Promise((resolve, reject) => {
    authenticator.createUserWithEmailAndPassword(email, _DEFAULT_PASSWORD)
      .then(response => {
        const { user } = response

        _addDisplayNameToUser(user, displayName)
          .then(() => resolve(user))
          .catch(err => reject(err.message))
      })
      .catch(err => reject(err.message))
  })
}
