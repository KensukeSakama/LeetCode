/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 0) {
        return 0;
    }
    if (n < 1) {
        return 1;
    }
    
    let steps = [0, 1]
    for (let i = 1; i <= n; i++) {
        steps.push(steps[steps.length-2] + steps[steps.length-1])
    }

    return steps[steps.length-1];
 };