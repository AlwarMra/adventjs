function checkJump(heights) {
  let path = ''

  for (let i = 0; heights.length > i; i++) {
    if (heights[i] > heights[i - 1]) path += 'u'
    if (heights[i] < heights[i - 1]) path += 'd'
  }
  return path.match(/^[u]+[d]+$/g) !== null
}

module.exports = checkJump
