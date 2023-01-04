const carryGifts = require('../challenge-17/index.js')

describe('Group strings given their lengths and a max value', () => {
  it('returns two groups', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual([
      'game bike',
      'book toy',
    ])
  })

  it('returns []', () => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([])
  })
})
