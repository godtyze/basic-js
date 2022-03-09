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
  let {repeatTimes: rT, separator: s, addition: a, additionRepeatTimes: aRT, additionSeparator: aS} = options;
  let string = String(str);

  if (!rT) rT = 1;
  if (!s) s = '+';
  if (a === undefined) a = '';
  if (a && typeof a !== 'string') String(a);
  if (!aRT) aRT = 1;
  if (!aS) aS = '|';


  let res = ((string + (a + aS).repeat(aRT) + s).repeat(rT)).split(s);
  res.pop();
  res = res.map(el => {
    let arr = el.split(aS);
    arr.pop();
    return arr.join(aS);
  }).join(s);

  return res;
}

module.exports = {
  repeater
};
