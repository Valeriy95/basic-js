const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error('\'arr\' parameter must be an instance of the Array!'); 
 }
  try {
    //   if (Array.isArray(arr) === false) {
    //     throw new Error('\'arr\' parameter must be an instance of the Array!'); 
    //  }
      let arrNew = arr.slice();
  
      arrNew.map((v, i, arr) => {
      if(v.toString() == '--discard-next') {
        if(arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
          arrNew.splice(i + 2, 1);
          arrNew.splice(i, 2);
        } else {
          arrNew.splice(i, 2);
        }
      }
      if(v === '--discard-prev') {
        if(i === 0) {
          arrNew.splice(i, 1);
        } else {
          arrNew.splice(i - 1, 2);
        }
      }
      if(v === '--double-next') {
        if(i === (arrNew.length - 1)) {
          arrNew.splice(i, 1);
        } else {
          arrNew.splice(i, 1, arr[i + 1]);
        }
      }
      if(v === '--double-prev') {
        if (i === 0) {
          arrNew.splice(i, 1);
        } else {
          arrNew.splice(i, 1, arr[i - 1]);
        }
      }
    })
    return arrNew;
    } catch (err) {
      return err
    }
}

module.exports = {
  transform
};
