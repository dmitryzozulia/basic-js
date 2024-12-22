const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let additionString = '';
  const string = String(str);
  const separator = options.separator ? options.separator : '+';
  const repeat = options.repeatTimes ? options.repeatTimes : 1;
  const addition = options.addition === undefined ? '' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  if (addition !== '') {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionString += `${String(addition) + (additionRepeatTimes === i ? '' : additionSeparator)}`;
    }
  }
  for (let i = 1; i <= repeat; i++) {
    result += `${string + additionString + (repeat === i ? '' : separator)}`;
  }
  return result;
}

module.exports = {
  repeater
};
