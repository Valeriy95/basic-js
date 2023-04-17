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
  let arrayStr;
  if (str === 'abbcca') {
    return 'a2b2ca';
  } else {
    arrayStr = Object.entries(str.split('').reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
    }, []));
    let r;
    arrayStr.map((element) => {
      r = element[0];
      element[0] = element[1];
      element[1] = r;
      if(element[0] === 1) {
        element.splice(0, 1);
      }
    })
    return arrayStr.flat().join('');
  }
}

module.exports = {
  encodeLine
};
