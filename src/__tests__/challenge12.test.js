const selectSleigh = require('../challenge-12/index.js')

describe('Check for optimal consumptions', () => {
  const sleighs = [
    { name: 'Dasher', consumption: 0.3 },
    { name: 'Dancer', consumption: 0.5 },
    { name: 'Rudolph', consumption: 0.7 },
    { name: 'Midu', consumption: 1 },
  ]
  const sleighs2 = [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 },
  ]
  const sleighs3 = [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 },
  ]

  it('return Dancer', () => {
    expect(selectSleigh(30, sleighs)).toBe('Dancer')
  })

  it('return TMChein', () => {
    expect(selectSleigh(1, sleighs2)).toBe('TMChein')
  })

  it('return null', () => {
    expect(selectSleigh(50, sleighs3)).toBe(null)
  })
})
