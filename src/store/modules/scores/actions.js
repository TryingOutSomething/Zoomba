import api from '@/services/mock-api'

export default {
  fetchPlayerRankings({ commit }) {
    return new Promise((resolve, reject) => {
      api.fetchPlayerRankingsFromServer()
        .then(response => {
          commit('populateRankingTable', response.data)
          resolve()
        })
        .catch(err => reject(err))
    })
  }
}
