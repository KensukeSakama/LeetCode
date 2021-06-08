/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(cand, target) {
    
    let output = [];
    let storage = {};
    
    const helper = (cand, target, col, sum) => {
        // console.log(col, sum);
        
        if (sum >= target) {
            if (sum === target) {
                col.sort((a,b) => a - b);
                if (storage[col] === undefined) {
                    storage[col] = 1;
                    output.push(col)
                }
            }
            return;
        } else {
            cand.forEach((a) => {
            helper(cand, target, col.concat(a), sum + a)
            })    
        }
    }
    
    helper(cand, target, [], 0);
    return output;

};