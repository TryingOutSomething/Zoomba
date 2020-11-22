import * as validators from '../src/utils/validation'

describe('Validations for front end inputs', () => {
  it('should be a valid email address', () => {
    const email = 'erer@adas.com'
    expect(validators.isValidEmail(email)).toBeTruthy()
  })

  it('should be an invalid email address', () => {
    let email = 'saddad'
    expect(validators.isValidEmail(email)).toBeFalsy()

    email = '213131'
    expect(validators.isValidEmail(email)).toBeFalsy()
  })

  it('Not Empty String Variable', () => {
    const str = 'saddad'
    expect(validators.requiredField(str)).toBeTruthy()
  })

  it('Empty String Variable', () => {
    const str = ''
    expect(validators.requiredField(str)).toMatch('Field is required!')
  })

  it('Incomplete Feedback Form', () => {
    expect(validators.isIncompleteFeedbackForm({
      name: '',
      email: '',
      description: ''
    })).toBeTruthy()

    expect(validators.isIncompleteFeedbackForm({
      name: 'wewqe',
      email: '',
      description: ''
    })).toBeTruthy()

    expect(validators.isIncompleteFeedbackForm({
      name: '',
      email: 'sdsda@adsda.com',
      description: ''
    })).toBeTruthy()

    expect(validators.isIncompleteFeedbackForm({
      name: '',
      email: '',
      description: 'ssadsdadda'
    })).toBeTruthy()

    expect(validators.isIncompleteFeedbackForm({
      name: 'wewqe',
      email: 'sdsda@adsda.com',
      description: ''
    })).toBeTruthy()

    expect(validators.isIncompleteFeedbackForm({
      name: '',
      email: 'sdsda@adsda.com',
      description: 'adasds'
    })).toBeTruthy()

    expect(validators.isIncompleteFeedbackForm({
      name: 'sdadd',
      email: '',
      description: 'adasds'
    })).toBeTruthy()
  })

  it('Complete Feedback Form', () => {
    expect(validators.isIncompleteFeedbackForm({
      name: 'dasd',
      email: 'asdas@adsa.com',
      description: 'descdadasd'
    })).toBeFalsy()
  })

  it('Incomplete Login Form', () => {
    let email = ''
    let password = 'asdsadad'
    expect(validators.isIncompleteLoginForm(email, password)).toBeTruthy()

    email = 'addadd'
    password = ''
    expect(validators.isIncompleteLoginForm(email, password)).toBeTruthy()
  })

  it('Complete Login Form', () => {
    const email = 'asdas@adsa.com'
    const password = 'asdsadad'
    expect(validators.isIncompleteRegistrationForm(email, password)).toBeFalsy()
  })

  it('Incomplete Registration Form', () => {
    let email = ''
    let password = 'asdsadad'
    expect(validators.isIncompleteRegistrationForm(email, password)).toBeTruthy()

    email = 'addadd'
    password = ''
    expect(validators.isIncompleteRegistrationForm(email, password)).toBeTruthy()
  })

  it('Complete Registration Form', () => {
    const email = 'asdas@adsa.com'
    const password = 'asdsadad'
    expect(validators.isIncompleteRegistrationForm(email, password)).toBeFalsy()
  })
})


