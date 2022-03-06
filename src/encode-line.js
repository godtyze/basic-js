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
  let res = [];
  let arr = str.split('');
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    let encoding;
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      count === 1 ? encoding = `${arr[i]}` : encoding = `${count}${arr[i]}`;
      res.push(encoding);
      count = 1;
    }
  }

  return res.join('');
}

module.exports = {
  encodeLine
};
