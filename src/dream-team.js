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
  if (Array.isArray(members)) {
    let teamName = [];
    for (i = 0; i < members.length; i++) { //возьми первое имя
      if (typeof members[i] == 'string') { //проверь на строку
        //возьми первый символ имени, который не является пробелом
        let x;
        x = members[i].trimStart().slice(0, 1);
        teamName.push(x.toUpperCase());
      }
    }
    teamName.sort();
    teamName = teamName.join('');
    return teamName;
  }
}
module.exports = {
  createDreamTeam
};
