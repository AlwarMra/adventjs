const getFilesToBackup = require('../challenge-13/index.js')

describe('check which processes were updated', () => {
  it('returns []', () => {
    expect(
      getFilesToBackup(1556300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ]),
    ).toEqual([])
  })

  it('returns []', () => {
    expect(
      getFilesToBackup(1546300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ]),
    ).toEqual([1, 2, 3])
  })
})
