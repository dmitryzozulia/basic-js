module.exports = function getSeason(cur_date) {
    if (arguments.length === 0) return 'Unable to determine the time of year!'
    if (type(cur_date) !== 'date') throw new Error()
    let month = cur_date.getMonth()
    let seasons = [
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
    return seasons[month]
};

function type(value) {
    let regex = /^\[object (\S+?)\]$/
    let matches = Object.prototype.toString.call(value).match(regex) || []
    return (matches[1] || 'undefined').toLowerCase()
}