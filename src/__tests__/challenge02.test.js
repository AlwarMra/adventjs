const countHours = require('../challenge-02/index.js')

describe('Extra time', () => {
  const y = '2022'
  const y2 = '2000'
  const ds = ['01/06', '04/01', '12/25']
  const ds2 = ['01/01']

  test('Expect 4 extra hours', () => {
    expect(countHours(y, ds)).toEqual(4)
  })

  test('No extra hours', () => {
    expect(countHours(y2, ds2)).toEqual(0)
  })
})
