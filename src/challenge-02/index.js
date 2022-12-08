function countHours(year, holidays) {
  let daysOff = 0

  holidays.forEach(day => {
    let d = day.split('/')
    const date = new Date(year, d[0] - 1, d[1])
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      daysOff++
    }
    return
  })

  return daysOff * 2
}

module.exports = countHours
