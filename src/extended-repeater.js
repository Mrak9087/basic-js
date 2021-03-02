const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = '' + str;
  this.separator = '+';

  if ('separator' in options){
    this.separator = options.separator;
  }

  if ('additionRepeatTimes' in options){
    for (let i = 0; i < options.additionRepeatTimes-1; i++){
      if ('addition' in options){
        str += options.addition;
      }

      if ('additionSeparator' in options){
        str += options.additionSeparator;
      } else {
        str += "|";
      }
    }
  }

  if ('addition' in options){
    str += options.addition;
  }

  if ('repeatTimes' in options){
    let tmp = str;
    for (let i = 0; i < options.repeatTimes-1; i++){
      str += this.separator + tmp;
    }
  }

  return str;
};
  