const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr = s1.length >= s2.length ? s2.split('') : s1.split('');
  let arrLong = s1.length >= s2.length ? s1.split('') : s2.split('');

  for (let i = 0; i < arrLong.length; i++) {
    arr.some((char, index) => {
      if (arrLong[i] === char) {
        arr.splice(index, 1);
        count++;
        return true;
      }
    })
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
