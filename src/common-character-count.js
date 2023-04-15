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
  let a = s1.split('');
  let b = s2.split('');
  let number = 0;
  for(let i = 0; i < a.length; i++) {
     for(let j = 0; j < b.length; j++) {
        if(a[i] === b[j]) {
           a.splice([i], 1);
           b.splice([j], 1);
           number++;
           i--;
        }
     }
  }
  return number
}

module.exports = {
  getCommonCharacterCount
};
