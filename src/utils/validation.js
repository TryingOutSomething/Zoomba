const _isEmptyField = (value) => value === ''

export const isValidEmail = (email) => {
  const VALID_EMAIL_REGEX_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return VALID_EMAIL_REGEX_PATTERN.test(email)
}

export const requiredField = (value) => !_isEmptyField(value) || 'Field is required!'

export const validEmail = (email) => isValidEmail(email) || 'Invalid e-mail!'

export const isIncompleteForm = (userInput) => {
  const { name, email, description } = userInput

  return _isEmptyField(name) || _isEmptyField(email) || _isEmptyField(description)
}
