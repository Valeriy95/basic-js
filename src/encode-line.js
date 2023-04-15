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
  let a;
  a = Object.entries(str.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, []));

  let r;
  a.map((v) => {
     r = v[0];
     v[0] = v[1];
     v[1] = r;
     if(v[0] === 1) {
        v.splice(0, 1);
     }
  })
  return a.flat().join('');
}

module.exports = {
  encodeLine
};
