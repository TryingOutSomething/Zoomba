export default {
  populateUserTable(state, players) {
    state.players = players
  },

  populateSelectedPlayerInfo(state, player) {
    state.viewingPlayer = Object.assign({}, player)
  },

  addPlayerToList(state, newPlayer) {
    state.players.push(newPlayer)
  },

  deleteSelectedPlayerFromList(state, deletingPlayerEmail) {
    state.players = state.players.filter(player => player.email !== deletingPlayerEmail)
  },

  clearSelectedPlayerInfo(state) {
    for (const key in state.viewingPlayer) {
      delete state.viewingPlayer[key]
    }
  }
}
