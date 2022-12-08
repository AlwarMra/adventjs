const getGiftsToRefill = require('../challenge-07/index.js')

describe('Find missing gifts in 2 out of 3 arrays', () => {
  it('return empty array', () => {
    expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toEqual([])
  })

  it('return every item in every array', () => {
    expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ])
  })
})
