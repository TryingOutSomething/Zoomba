import { authenticator, firestore, Timestamp } from '@/plugins/firebase'

const _DEFAULT_PASSWORD = '******'
const _USER_COLLECTION = 'users'
const _DEFAULT_ORDER_BY = 'score'

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

const _addDisplayNameToPatient = async (user, displayName) => {
  try {
    await user.updateProfile({ displayName })
  } catch (err) {
    return err
  }
}

const _insertPatientRecordIntoDb = async (patientInfo) => {
  const { email, displayName } = patientInfo

  try {
    const result = await firestore.collection(_USER_COLLECTION).add({
      email,
      name: displayName,
      createdAt: Timestamp.now()
    })

    return result.id
  } catch (err) {
    return err.message
  }
}

export const createPatient = async (email, displayName) => {
  try {
    const response = await authenticator.createUserWithEmailAndPassword(email, _DEFAULT_PASSWORD)

    const { user } = response

    await _addDisplayNameToPatient(user, displayName)
    return await _insertPatientRecordIntoDb({
      email,
      displayName
    })
  } catch (err) {
    return err.message
  }
}

export const getAllPatients = () => firestore.collection('users')

export const deletePatient = async (patientId) => {
  try {
    await firestore.collection(_USER_COLLECTION).doc(patientId).delete()
  } catch (err) {
    return err.message
  }
}

export const getGameRankings = (game) => firestore.collection(game).orderBy(_DEFAULT_ORDER_BY)
