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
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    //начало цикла

    // if (arr[0] === '--discard-prev' || arr[arr.length - 1] === '--discard-next' || arr[0] === '--double-prev' || arr[arr.length - 1] === '--double-next') {
    //   //ничего не делать, в случае, если рядом нет элемента, которым можно манипулировать
    //   return arr;
    // }

    for (i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-prev' && i != 0) {
        arr.splice((i - 1), 2); //начиная с предыдущей позиции удали два елемента
      } else if (arr[i] === '--discard-prev' && i === 0) {
        arr.splice(i, 1);
      } else if (arr[i] === '--discard-next' && (i != arr.length - 1)) {
        arr.splice(i, 2); //начиная с этой позиции удали два элемента
      } else if (arr[i] === '--discard-next' && (i === arr.length - 1)) {
        arr.splice(i, 1);
      } else if (arr[i] === '--double-prev' && i != 0) {
        arr[i] = arr[i - 1]; //присвой элементу i значение предыдущего
      } else if (arr[i] === '--double-prev' && i === 0) {
        arr.splice(i, 1);
      } else if (arr[i] === '--double-next' && (i != arr.length - 1)) {
        arr[i] = arr[i + 1]; //присвой элементу i значение предыдущего
      } else if (arr[i] === '--double-next' && (i === arr.length - 1)) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
}
module.exports = {
  transform
};
