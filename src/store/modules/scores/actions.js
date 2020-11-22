import api from '@/services/mock-api'

export default {
  fetchPlayerRankings({ commit }, selectedGame) {
    return new Promise((resolve, reject) => {
      api.fetchPlayerRankingsFromServer(selectedGame)
        .then(response => {
          commit('populateRankingTable', response.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  }
}
