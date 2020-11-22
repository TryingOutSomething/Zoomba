const mockRankingData = [
  {
    email: 'teet@tete.com',
    name: 'test',
    score: '0'
  }
]

export default {
  fetchPlayerRankingsFromServer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: mockRankingData
        }, 10000)
      })
    })
  }
}
