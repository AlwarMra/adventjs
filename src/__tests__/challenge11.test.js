const getCompleted = require('../challenge-11/index.js')

describe('return a fraction of time left', () => {
  it('return 3/5', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toEqual('3/5')
  })

  it('return 1/1', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
  })
})
