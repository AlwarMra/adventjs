const decorateTree = require('../challenge-15/index.js')

describe('Decorate Christmas tree', () => {
  it('return tree', () => {
    expect(decorateTree('B B P R P R R')).toEqual([
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R',
    ])
  })
})
