function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const allCombinations = giftsCities.reduce(
    (a, v) => a.concat(a.map(d => [v].concat(d))),
    [[]],
  )
  const filteredCombinations = allCombinations
    .filter(x => x.length <= maxCities)
    .map(a => a.reduce((x, y) => x + y, 0))
    .filter(x => x <= maxGifts)

  return Math.max(...filteredCombinations)
}

module.exports = getMaxGifts
