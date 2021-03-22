/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let arr = [];
    let input = x;
    while (input >= 10){
        arr.unshift(input % 10);
        input -= arr[0];
        input /= 10
    }
    arr.unshift(input);
    
    for (let i = 0; i < arr.length; i++) {
        let j = arr.length - 1 - i;
        if (i === j) {
            return true;
        } 
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
};