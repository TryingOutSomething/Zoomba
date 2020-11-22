export default {
  populateRankingTable(state, rankings) {
    state.rankings = rankings
  },

  populateSelectedPlayerInfo(state, player) {
    state.viewingPlayerRanking = Object.assign({}, player)
  },

  clearSelectedPlayerInfo(state, player) {
    for (const key in state.viewingPlayerRanking) {
      delete state.viewingPlayerRanking[key]
    }
  }
}
