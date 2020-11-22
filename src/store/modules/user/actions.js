import api from '@/services/mock-api'

export default {
  fetchAllPlayers({ commit }) {
    return new Promise((resolve, reject) => {
      api.fetchPlayersFromServer()
        .then(response => {
          commit('populateUserTable', response.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  },

  addPlayer({ commit }, newPlayer) {
    return new Promise((resolve, reject) => {
      api.addNewPayerToServer(newPlayer)
        .then(response => {
          commit('addPlayerToList', response.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  },

  deletePlayer({ commit }, player) {
    return new Promise((resolve, reject) => {
      api.deletePlayerFromServer(player)
        .then(() => {
          const { email } = player

          commit('deleteSelectedPlayerFromList', email)
          resolve()
        })
        .catch(err => reject(err))
    })
  }
}
