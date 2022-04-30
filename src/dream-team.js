const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let teamName = [];
  members.sort();

  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      let x;
      x = members[i].slice(0, 1).toUpperCase(); // возьми первый символ приведи к верхнему регистру
      teamName.push(x); //закинь в массив
    }
  }
  teamName = teamName.join('');
  return teamName;
}

module.exports = {
  createDreamTeam
};
