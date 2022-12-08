const distributeGifts = require('../challenge-03/index.js')

describe('Distribute gifts', () => {
  const gifts = ['music']
  const reindeers = [
    'midudev',
    'pheralb',
    'codingwithdani',
    'carlosble',
    'blasco',
    'facundocapua',
    'madeval',
    'memxd',
  ]

  test('Distribution fail === 0', () => {
    expect(distributeGifts(['videogames', 'console'], ['alwar'])).toEqual(0)
  })

  test('Gift can be distributed 26 times', () => {
    expect(distributeGifts(gifts, reindeers)).toEqual(26)
  })
})
