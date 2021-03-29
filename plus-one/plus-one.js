/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let output = [];
    let carryOver = 0;
    for (let i = digits.length-1; i >= 0; i--){
        let sum = digits[i];
        if (i === digits.length-1) {
            sum += 1;
        }
        
        sum += carryOver;
        carryOver = 0;
        
        if (sum >= 10){
            carryOver = 1;
            sum = sum % 10;
        }
        
        output.unshift(sum)
    }

    
    if (carryOver){
        output.unshift(carryOver);
        return output;
    } else {
        return output;
    }
    
};