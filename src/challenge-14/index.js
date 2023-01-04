function getOptimalPath(path) {
  return path.reduceRight((acc, curr) => {
    return curr.map((val, i) => {
      return val + Math.min(acc[i], acc[i + 1])
    })
  })[0]
}
module.exports = getOptimalPath
