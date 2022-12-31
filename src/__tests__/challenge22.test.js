const checkStepNumbers = require('../challenge-22/index.js')

describe('Check if every light is in ascending order', () => {
  it('returns true', () => {
    expect(
      checkStepNumbers(
        ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
        [1, 33, 10, 2, 44, 20],
      ).toBe(true),
    )
  })
  it('returns false', () => {
    expect(
      checkStepNumbers(
        [
          'house',
          'house',
          'tree_1',
          'tree_1',
          'house',
          'tree_2',
          'tree_2',
          'tree_3',
        ],
        [5, 2, 1, 2, 3, 4, 5, 6],
      ).toBe(false),
    )
  })
})
