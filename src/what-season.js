module.exports = function getSeason(cur_date) {
    const seasons = [
        'winter',
        'winter',
        'spring',
        'spring',
        'spring',
        'summer',
        'summer',
        'summer',
        'fall',
        'fall',
        'fall',
        'winter'
    ]
    if (arguments.length === 0) return 'Unable to determine the time of year!'
    const regex = /^\[object (\S+?)\]$/
    const matches = Object.prototype.toString.call(cur_date).match(regex) || []
    if ((matches[1] || 'undefined').toLowerCase() !== 'date') throw new Error()
    let month = cur_date.getMonth()
    return seasons[month]
}
