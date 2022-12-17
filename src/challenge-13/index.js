function getFilesToBackup(lastBackup, changes) {
  const areChanged = changes.filter(change => {
    return change[1] > lastBackup
  })

  let sortedData = [
    ...new Set(
      areChanged.map(change => {
        return change[0]
      }),
    ),
  ]
  sortedData.sort((a, b) => a - b)
  return sortedData
}

module.exports = getFilesToBackup
