const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true){
    this.direct = direct;
  }
  encrypt(message, key) {
    if (arguments.length < 2) throw new Error('arguments is undefined');
    let messTmp = message.toUpperCase();
    let keyTmp = key.toUpperCase();
    let resArr = [];
    let lenKey = key.length;
    let indexKey = 0;
    for (const ch of messTmp) {
      let chCode = ch.charCodeAt(0);
      if (chCode > 64 && chCode < 91){
        let keyCode = keyTmp[indexKey++].charCodeAt(0);
        if (keyCode > 64 && keyCode < 91){
          resArr.push( String.fromCharCode(65 + ( (chCode + keyCode) % 26) ) );
        }
        if (indexKey >= lenKey){
          indexKey = 0;
        }
      } else {
        resArr.push(ch);
      } 

    }
    return (this.direct)? resArr.join(''): resArr.reverse().join('');
  }    
  decrypt(message, key) {
    if (arguments.length < 2) throw new Error('arguments is undefined');
    let messTmp = message.toUpperCase();
    let keyTmp = key.toUpperCase();
    let resArr = [];
    let lenKey = key.length;
    let indexKey = 0;
    for (const ch of messTmp) {
      let chCode = ch.charCodeAt(0);
      if (chCode > 64 && chCode < 91){
        let keyCode = keyTmp[indexKey++].charCodeAt(0);
        if (keyCode > 64 && keyCode < 91){
          resArr.push( String.fromCharCode(65 + ( (chCode - keyCode + 26) % 26) ) );
        }
        if (indexKey >= lenKey){
          indexKey = 0;
        }
      } else {
        resArr.push(ch);
      } 

    }
    return (this.direct)? resArr.join(''): resArr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
