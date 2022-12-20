const dryNumber = require('../challenge-18/index.js')

describe('return numbers on range that includes digit', () => {
  it('return array for range 0-20 every digit 2', () => {
    expect(dryNumber(2, 20)).toEqual([2, 12, 20])
  })
})

describe('return numbers on range that includes digit', () => {
  it('return array for range 0-55 every digit 5', () => {
    expect(dryNumber(5, 55)).toEqual([
      5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55,
    ])
  })
})
