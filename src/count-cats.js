const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const array = matrix.flat(Infinity);
  const cat = '^^';
  let count = 0;
  array.forEach(item => {
    if(item) {
      if(item === cat) {
        count++;
      }
    }
  })
  return count;
}

module.exports = {
  countCats
};
