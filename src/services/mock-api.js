import { mockPlayerData, mockRankingDataDescending } from '@/utils/mock-data'

const generateNewPlayerPayload = (player) => {
  return {
    data: player
  }
}

export default {
  fetchPlayerRankingsFromServer(selectedGame) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: mockRankingDataDescending(selectedGame)
        }, 1000)
      })
    })
  },

  fetchPlayersFromServer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: mockPlayerData
        }, 1000)
      })
    })
  },

  addNewPayerToServer(newPlayer) {
    return new Promise(resolve => {
      setTimeout(() => resolve(generateNewPlayerPayload(newPlayer)), 500)
    })
  },

  deletePlayerFromServer(player) {
    return new Promise(resolve => {
      setTimeout(() => resolve(player), 500)
    })
  }
}
