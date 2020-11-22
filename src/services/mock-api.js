const mockRankingData = [
  {
    name: 'test',
    score: '0'
  }
]

export default {
  fetchPlayerRankingsFromServer() {
    return new Promise(resolve => {
      resolve({
        data: mockRankingData
      })
    })
  }
}
