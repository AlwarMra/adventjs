function distributeGifts(packOfGifts, reindeers) {
  let giftsWeight = 0
  let reindeersWeight = 0
  packOfGifts.forEach(gift => (giftsWeight += gift.length))
  reindeers.forEach(reindeer => (reindeersWeight += reindeer.length * 2))
  console.log(giftsWeight, reindeersWeight)
  return Math.floor(reindeersWeight / giftsWeight)
}

module.exports = distributeGifts
