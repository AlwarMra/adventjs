function countTime(leds) {
  const newLeds = leds.join('').split('1')
  const l = newLeds[0].length + newLeds[newLeds.length - 1].length
  return Math.max(...newLeds.map(led => led.length), l) * 7
}

module.exports = countTime
