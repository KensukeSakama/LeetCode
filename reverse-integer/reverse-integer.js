/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {    
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    let str = String(x);
    let output = Number(str.split('').reverse().join(''))
    
    if (output > Math.pow(2, 31)-1 || output < Math.pow(-2, 31)) {
        return 0;
    } else {
        if (isNegative) {
            return output * -1;
        } else {
            return output;
        }
    }
};