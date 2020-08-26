module.exports = function repeater(str, options) {
    const sep = options.separator ? options.separator : '+'
    const add = options.addition !== undefined ? options.addition : ''
    const addSep = options.additionSeparator ? options.additionSeparator : ''
    const additionSepStr = add + addSep
    let additionStr
    if (addSep.length === 0) {
        additionStr = additionSepStr
            .repeat(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
    } else {
        additionStr = additionSepStr
            .repeat(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
            .slice(0, -addSep.length)
    }
    str = str + additionStr + sep
    return str.repeat(options.repeatTimes ? options.repeatTimes : 1).slice(0, -sep.length)
}
  