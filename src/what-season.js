const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // let dateArray = Object.getOwnPropertyNames(date);
  // if (dateArray instanceof Date) {
  //   if (dateArray[0] > 0 && 0 < dateArray[1] > 13 && 0 < dateArray[2] > 32) {
  //     if (dateArray[1] == 12 || dateArray[1] == 1 || dateArray[1] == 2) {
  //       return 'winter';
  //     }
  //     else if (dateArray[1] == 3 || dateArray[1] == 4 || dateArray[1] == 5) {
  //       return 'spring';
  //     }
  //     else if (dateArray[1] == 6 || dateArray[1] == 7 || dateArray[1] == 8) {
  //       return 'summer';
  //     }
  //     else if (dateArray[1] == 9 || dateArray[1] == 10 || dateArray[1] == 11) {
  //       return 'fall';
  //     }
  //   }
  // }
  // else {
  //   throw new Error('Invalid date!');
  // }

  throw new NotImplementedError('Not implemented');
}
module.exports = {
  getSeason
};
