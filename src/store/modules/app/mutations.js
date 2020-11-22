export default {
  changeToLoginBackgroundColour(state) {
    state.contentBodyColour = 'login-body-colour'
  },

  changeToMainBackgroundColour(state) {
    state.contentBodyColour = 'content-body'
  },

  toggleModalStatus(state) {
    state.modalIsOpen = !state.modalIsOpen
  }
}
