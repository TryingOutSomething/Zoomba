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

const _addDisplayNameToUser = async (user, displayName) => {
  try {
    const response = await user.updateProfile({ displayName })

    return response.user
  } catch (err) {
    return err
  }
}

export const createUser = async (email, displayName) => {
  try {
    const response = await authenticator.createUserWithEmailAndPassword(email, _DEFAULT_PASSWORD)

    const { user } = response
    return await _addDisplayNameToUser(user, displayName)
  } catch (err) {
    return err.message
  }
}
