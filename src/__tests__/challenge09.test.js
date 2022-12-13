const countTime = require('../challenge-09/index.js')

describe('Turn on led lights', () => {
  it('all lights on within 28s', () => {
    expect(countTime([1, 1, 0, 0, 0, 0])).toEqual(28)
  })

  it('all lights on within 14s', () => {
    expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14)
  })

  it('all lights on within 7s', () => {
    expect(countTime([0, 1, 1, 0, 1])).toEqual(7)
  })
})
