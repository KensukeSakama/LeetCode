/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let negative
    
    //edge cases: [0, 0], [-1, 1], [-1, -1], [1, 1]
    
    if ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) negative = true;
    if (divisor === 0) return null;
    if (dividend === 0) return 0;
    
    let output = 0;
    let max = (2**31)-1;
    let min = -(2**31)
    
    const helper = (dividend, divisor) => {
        if (divisor === 1 || divisor === -1) {
            output = Math.abs(dividend);
            return;
        }
        
        dividend = Math.abs(dividend)
        divisor = Math.abs(divisor)
        while (dividend >= divisor) {
            dividend -= divisor
            output++;
        }
    }
    
    helper(dividend, divisor);
    
    negative ? output *= -1 : output;
    
    if (output > max) return max;
    else if (output < min) return min;
    else return output;
    
};