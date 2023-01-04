function carryGifts(gifts, maxWeight) {
  const regExp = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')
  return gifts.join(' ').match(regExp) || []
}

module.exports = carryGifts
