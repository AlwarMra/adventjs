function decorateTree(base) {
  const tree = [base]
  const dict = {
    BB: 'B',
    RR: 'R',
    PP: 'P',
    BP: 'R',
    BR: 'P',
    PB: 'R',
    PR: 'B',
    RB: 'P',
    RP: 'B',
  }
  const baseArray = base.split(' ')
  function createRows(arr) {
    const row = []
    const length = arr.length - 1

    for (let i = 0; length > i; i++) {
      const key = arr[i] + arr[i + 1]
      row.push(dict[key])
    }
    tree.unshift(row.join(' '))
    if (row.length > 1) createRows(row)
  }

  createRows(baseArray)

  return tree
}

module.exports = decorateTree
