function dryNumber(dry, numbers) {
  const ns = Array.from(new Array(numbers), (x, i) => i + 1)
  return ns.filter(n => {
    let nString = n.toString()
    if (nString.includes(dry)) return n
  })
}

module.exports = dryNumber
