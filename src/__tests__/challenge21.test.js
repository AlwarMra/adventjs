const printTable = require('../challenge-21/index.js')

describe('display table with given data', () => {
  it('returns a perfectly formatted table', () => {
    expect(
      printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 },
      ]),
    ).toEqual(
      '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************',
    )
  })
})
