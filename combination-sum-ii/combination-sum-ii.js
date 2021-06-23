/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    let cand = candidates.sort((a,b) => a-b);
    let sliceIndex = cand.length;
    for (let i = cand.length-1; i >= 0; i--){
        if (cand[i] <= target){
            if (i !== cand.length-1){
                sliceIndex = i+1;
                break;
            } else {
                break;
            }
        }
    }
    if (sliceIndex !== cand.length) {
        cand = cand.slice(0, sliceIndex);
    }
    
    let output = new Set();
    let result = []
    
    const helper = (sum, start, nums) => {
        // console.log(sum, start, nums);
        if (sum < 0) return;
        if (sum === 0) {
            result.push(nums.slice());
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue;
            nums.push(candidates[i])
            helper(sum-candidates[i], i+1, nums);
            nums.pop();
        }
        
    }
    
    helper(target, 0, []);
    return result;
    
};

// var combinationSum2 = function(candidates, target) {
//     const result = [];
//     candidates.sort((b,a) => b - a);
    
//     const helper= (rem, start, current) => {
//         if(rem < 0) return;
//         if(rem === 0) {
//             result.push(current.slice())
//             return;
//         }
        
//         for(let i = start; i < candidates.length; i++){
//             if(i > start && candidates[i] === candidates[i - 1]) continue;
//             current.push(candidates[i])
//             helper(rem - candidates[i], i + 1, current.slice());
//             current.pop();
//         }
//     }
    
//     helper(target, 0 , []);
    
//     return result;
// };