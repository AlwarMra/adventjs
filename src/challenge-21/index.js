function printTable(gifts) {
  const GIFT = 'Gift'
  const QUANTITY = 'Quantity'

  const longestGift = Math.max(...gifts.map(el => el.name.length), GIFT.length)
  const longestQuantity = Math.max(
    ...gifts.map(el => el.quantity.toString().length),
    QUANTITY.length,
  )
  const body = gifts
    .map(el => {
      const nameSpaces = ' '.repeat(longestGift - el.name.length)
      const qSpaces = ' '.repeat(
        longestQuantity - el.quantity.toString().length,
      )
      return `| ${el.name}${nameSpaces} | ${el.quantity}${qSpaces} |\n`
    })
    .join('')

  return (
    `${'+'.repeat(longestGift + longestQuantity + 7)}\n` +
    `| ${GIFT + ' '.repeat(longestGift - GIFT.length)} | ${
      QUANTITY + ' '.repeat(longestQuantity - QUANTITY.length)
    } |\n` +
    `| ${'-'.repeat(longestGift)} | ${'-'.repeat(longestQuantity)} |\n` +
    `${body}` +
    `${'*'.repeat(longestGift + longestQuantity + 7)}`
  )
}

module.exports = printTable
