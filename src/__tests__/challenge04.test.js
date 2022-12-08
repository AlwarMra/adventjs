const fitsInOneBox = require('../challenge-04/index.js')

describe('Multidimensional boxes: all boxes fit in the next one if smaller', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ]
  const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ]

  it('returns true if boxes fit', () => {
    expect(fitsInOneBox(boxes)).toBe(true)
  })

  it('returns false if boxes do not fit', () => {
    expect(fitsInOneBox(boxes2)).toBe(false)
  })
})
