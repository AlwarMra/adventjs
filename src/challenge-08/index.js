function checkPart(part) {
  for (let i = 0; part.length > i; i++) {
    let p = part.slice(0, i) + part.slice(i + 1)
    let pPrev = p.split('').reverse().join('')
    if (p === pPrev) return true
  }
  return false
}

module.exports = checkPart
