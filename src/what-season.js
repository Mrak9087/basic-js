const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (type(date) != 'date') throw new Error();
  let month = date.getMonth();
  switch (month){
    case 0:
    case 1:
    case 11: return 'winter';
    case 2:
    case 3:
    case 4: return 'spring';
    case 5:
    case 6:
    case 7: return 'summer';
    case 8:
    case 9:
    case 10:return 'autumn';
  }

};

function type(value){
  let regex = /^\[object (\S+?)\]$/;
  let matches = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || 'undefined').toLowerCase();
}
