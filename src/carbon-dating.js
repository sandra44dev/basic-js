const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != 'string') {
    return false;
  } else {
    let x = Number(sampleActivity);
    if (x < MODERN_ACTIVITY && x > 0) { //проверяю число на нормальность чтобы вернуть false
      let k = 0.693 / HALF_LIFE_PERIOD;
      let age = Math.log(MODERN_ACTIVITY / x) / k;
      let answer = Math.ceil(age);
      return answer;
    } else {
      return false;
    }
  }
}

module.exports = {
  dateSample
};
