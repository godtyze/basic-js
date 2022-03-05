const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');

  let res = arr.map((el, idx, copy) => {
    copy = arr.slice(0);
    copy.splice(idx, 1);
    return Number(copy.join(''));
  });

  return Math.max(...res);
}

module.exports = {
    deleteDigit
};
