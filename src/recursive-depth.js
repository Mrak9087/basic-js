const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let count = 1;
    for (let elem of arr){
      let depth = 1;
      if (Array.isArray(elem)){
        depth += this.calculateDepth(elem);
        count = (depth > count) ? depth: count; 
      }
    }
    return count;
  }
};