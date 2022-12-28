function sortToys(toys, positions) {
  let obj = {}

  for (let i = 0; toys.length > i; i++) {
    obj[positions[i]] = toys[i]
  }
  return Object.values(obj)
}

module.exports = sortToys
