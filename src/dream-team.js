const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined || !Array.isArray(members)) return false;
  return members.map(
    item => {
        if (typeof item === 'string'){
             item = item.trim();
             return item.slice(0,1).toUpperCase();
        }
    }
  ).sort().join('');   
};
