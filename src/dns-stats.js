const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach((el) => {
    el = el.split('.');
    for (let i = 0; i < el.length; i++) {
      let reverseDomain = '.' + el.slice(i).reverse().join('.');
      if (result.hasOwnProperty(reverseDomain)) {
        result[reverseDomain]++;
      } else {
        result[reverseDomain] = 1;
      }
    }
  });
  return result;
}


module.exports = {
  getDNSStats
};
