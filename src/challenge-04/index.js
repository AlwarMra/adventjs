function fitsInOneBox(boxes) {
  boxes.sort((a, b) => b.l - a.l)

  for (let i = 1; i < boxes.length; i++) {
    if (
      boxes[i].l >= boxes[i - 1].l ||
      boxes[i].h >= boxes[i - 1].h ||
      boxes[i].w >= boxes[i - 1].w
    ) {
      return false
    }
  }
  return true
}

module.exports = fitsInOneBox
