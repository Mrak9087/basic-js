const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN = 0.693

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === null || sampleActivity === "" || typeof sampleActivity !== "string" || arguments.length === 0) return false;
  numActivity = parseFloat(sampleActivity);
  if (isNaN(numActivity)) return false;
  if (numActivity <= 0 || numActivity > MODERN_ACTIVITY) return false;
  let k = LN / HALF_LIFE_PERIOD;
  let result = Math.ceil((MODERN_ACTIVITY / numActivity) / k);
  return result;
};
