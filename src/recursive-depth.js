const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {

    let arrFirst = arr;
    let count = 1;
    goDeeper(arrFirst);
    function goDeeper(arrInner) {
      for (let i = 0; i < arrInner.length; i++) {
        if ((typeof arrInner[i]) === 'object') {
          count = count + 1;


          for (let j = 0; j < arrInner[i].length; j++) {
            if ((typeof arrInner[i][j]) === 'object') {
              count = count + 1;

            }
          }


        }
      }
    }

    return count;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
