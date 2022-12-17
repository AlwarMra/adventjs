const getMaxGifts = require('../challenge-05/index.js')

describe('deliver gifts given max gifts and places to deliver', () => {
  it('returns 100', () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toEqual(100)
  })
  it('returns 0', () => {
    expect(getMaxGifts([50], 15, 1)).toEqual(0)
  })
})
