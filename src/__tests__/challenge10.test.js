const checkJump = require('../challenge-10/index.js')

describe('check for parabole', () => {
  it('returns true', () => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
  })

  it('returns false', () => {
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
  })
})
