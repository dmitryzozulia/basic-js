const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current = '';
  let count = 1;
  let result = '';
  for(let i = 0; i <= str.length; i++) {
    if(current === str[i]) {
      count++;
    } else if (current !== str[i] || str.length - 1 === i) {
      if(count === 1){
        result += current;
      } if (count > 1) {
        result += `${count + current}`;
      }
      count = 1;
      current = str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
