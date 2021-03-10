/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let steps = [1, 2];
//     let counter = 0;
//     let innerFunc = (currentP) => {
//         if (currentP === n) {
//             return counter++;
//         } else if (currentP > n) {
//             return;
//         }
        
//         steps.forEach((step) => {
//             innerFunc(currentP+step);    
//         })    
//     }
//     innerFunc(0);
//     return counter;
// };

var climbStairs = function(n) {
    steps = [1,2]
    if (n < 3) {
        return n;
    } 
    else {
        while (steps.length < n) {
            steps.push(steps[steps.length-2]+steps[steps.length-1])    
        }
        return steps[steps.length-1];
    }
};