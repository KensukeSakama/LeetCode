/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    if (num <=3) {
        return false;
    }
    
    let sum = 3;
    let arr = [1, 2];
    
    for (let i = 3; i <= Math.floor(num/2); i++) {
        if (num % i === 0) {
            arr.push(i);
            sum += i;
        }
    }
    // console.log(arr, sum);
    if (sum === num) return true;
    else return false;
    
    
};