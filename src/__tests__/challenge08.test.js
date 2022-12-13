const checkPart = require('../challenge-08/index.js')

describe('It is a palindrome even when substracting a character', () => {
  it('returns false', () => {
    expect(checkPart('asdfrgdsa')).toBe(false)
  })

  it('returns true', () => {
    expect(checkPart('zzzoonzzz')).toBe(true)
  })
})
