const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined) return false;
  return members.map(
    item => {
        if (typeof item === 'string'){
             return item.slice(0,1).toUpperCase();
        }
    }
  ).sort().join('');   
};
