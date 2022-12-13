function selectSleigh(distance, sleighs) {
  let newSleight = sleighs.filter(sleigh => {
    return sleigh.consumption * distance <= 20
  })

  if (newSleight.length === 0) return null

  return newSleight.sort((a, b) => {
    return b.consumption - a.consumption
  })[0].name
}

module.exports = selectSleigh
