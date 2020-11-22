const mockRankingData = {
  flappy_bird: [
    {
      email: 'player1@ready.com',
      name: 'Player 1',
      score: 100
    },
    {
      email: 'player1@ready.com',
      name: 'Player 1',
      score: 20
    },
    {
      email: 'player3@ready.com',
      name: 'Player 3',
      score: 0
    },
    {
      email: 'player4@ready.com',
      name: 'Player 4',
      score: 5
    }
  ],

  stars_collector: [
    {
      email: 'player1@ready.com',
      name: 'Player 1',
      score: 500
    },
    {
      email: 'player3@ready.com',
      name: 'Player 3',
      score: 120
    },
    {
      email: 'player2@ready.com',
      name: 'Player 2',
      score: 69
    },
    {
      email: 'player3@ready.com',
      name: 'Player 3',
      score: 55
    }
  ],
  box_drop: [
    {
      email: 'player2@ready.com',
      name: 'Player 2',
      score: 102
    },
    {
      email: 'player2@ready.com',
      name: 'Player 2',
      score: 40
    },
    {
      email: 'player4@ready.com',
      name: 'Player 4',
      score: 10
    },
    {
      email: 'player4@ready.com',
      name: 'Player 4',
      score: 52
    }
  ]
}

export const mockRankingDataDescending = (selectedGame) => {
  const game = mockRankingData[selectedGame]

  return game.sort((a, b) => a.score > b.score ? -1 : 1)
}

export const mockPlayerData = [
  {
    email: 'player1@ready.com',
    name: 'Player 1'
  },
  {
    email: 'player2@ready.com',
    name: 'Player 2'
  },
  {
    email: 'player3@ready.com',
    name: 'Player 3'
  },
  {
    email: 'player4@ready.com',
    name: 'Player 4'
  }
]
