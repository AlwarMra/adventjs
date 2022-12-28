const sortToys = require('../challenge-19/index.js')

describe('return toys in correct positions', () => {
  it('test 1', () => {
    expect(
      sortToys(
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
        [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111],
      ),
    ).toEqual(['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'])
  })
})
