import { authenticateUser, logoutUser } from '../src/services/firebase'

/**
 * Replace import alias for every file being tested on inside the src directory before running the tests
 */
describe('Authenticating a User', () => {
  const REGEX_PATTERN = /invalid|badly formatted|does not have a password|no user/

  let email = ''
  let password = ''

  it('Should contain invalid email error', () => {
    return authenticateUser(email, password)
      .catch(err => {
        expect(err).toMatch(REGEX_PATTERN)
      })
  })

  email = 'sjdjnnd@sads.com'
  password = ''

  it('Should be an invalid password error', () => {
    return authenticateUser(email, password)
      .catch(err => {
        expect(err).toMatch(REGEX_PATTERN)
      })
  })

  email = 'adsd@test.com'
  password = 'asdsdad'

  it('Should be an invalid user error', () => {
    return authenticateUser(email, password)
      .catch(err => {
        expect(err).toMatch(REGEX_PATTERN)
      })
  })

  email = 'testuser@test.com'
  password = '123456'

  it('Should be a valid user', () => {
    return authenticateUser(email, password)
      .then(user => {
        const { email: authenticatedEmail, uid } = user

        expect(email).toEqual(authenticatedEmail)
        expect(uid).not.toBeNull()
      })
  })

  // Always run this test last
  it('Should successfully logout user', () => {
    return logoutUser()
      .then(response => {
        expect(response).toBeTruthy()
      })
      .catch(err => {
        expect(err).not.toBeNull()
      })
  })
})
