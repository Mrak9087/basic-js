const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = '' + str;
  let separator = '+';

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
      }
    }
  }

  if ('addition' in options){
    str += options.addition;
  }

  if ('repeatTimes' in options){
    let tmp = str;
    for (let i = 0; i < options.repeatTimes-1; i++){
      str += separator + tmp;
    }
  }

  return str;
};
  