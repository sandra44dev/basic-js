const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let check = /([0-9-A-F]{2}\-){5}([0-9-A-F]{2})$/;
  //два символа (от 0 до 9 или от а до ф) со знаком - 5 раз
  //два символа без знака один раз
  return check.test(n);
}
module.exports = {
  isMAC48Address
};
