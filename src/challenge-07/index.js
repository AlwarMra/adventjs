function getGiftsToRefill(a1, a2, a3) {
  const missing = []
  const all = [...new Set([...a1, ...a2, ...a3])]

  all.forEach(e => {
    if (a1.includes(e) + a2.includes(e) + a3.includes(e) === 1) missing.push(e)
  })

  return missing
}

module.exports = getGiftsToRefill
