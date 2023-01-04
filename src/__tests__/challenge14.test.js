const getOptimalPath = require('../challenge-14/index.js')

describe('Binary tree optimal path', () => {
  it('returns 5', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toEqual(5)
  })

  it('returns 8', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toEqual(8)
  })
})
