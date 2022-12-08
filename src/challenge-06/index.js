function createCube(size) {
  let currentLine = 1
  let cube = ''

  while (currentLine <= size * 2) {
    if (currentLine === size * 2) {
      cube += ' '.repeat(size - 1) + '\\/' + '_/'.repeat(size)
      currentLine++
      break
    }
    if (currentLine <= size) {
      cube +=
        ' '.repeat(size - currentLine) +
        '/\\'.repeat(currentLine) +
        '_\\'.repeat(size)
    } else {
      cube +=
        ' '.repeat(currentLine - size - 1) +
        '\\/'.repeat(size - (currentLine - size - 1)) +
        '_/'.repeat(size)
    }
    cube += '\n'
    currentLine++
  }

  return cube
}

module.exports = createCube
