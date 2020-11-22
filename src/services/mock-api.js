const mockRankingData = [
  {
    email: 'teet@tete.com',
    name: 'test',
    score: '0'
  }
]

const mockPlayerData = [
  {
    email: 'teet@tete.com',
    name: 'test',
    score: '0'
  }
]

const generateNewPlayerPayload = (player) => {
  return {
    data: player
  }
}

export default {
  fetchPlayerRankingsFromServer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: mockRankingData
        }, 10000)
      })
    })
  },

  fetchPlayersFromServer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: mockPlayerData
        }, 10000)
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
