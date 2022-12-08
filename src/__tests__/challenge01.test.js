const wrapping = require('../challenge-01/index.js')

describe('Wrapping strings', () => {
  test('Result type', () => {
    expect(wrapping([])).toBeInstanceOf(Array)
  })

  test('Three strings', () => {
    const arr = ['cat', 'game', 'socks']
    const result = wrapping(arr)

    expect(result).toEqual([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ])
  })

  test('Empty string', () => {
    expect(wrapping([])).toEqual([])
  })
})
