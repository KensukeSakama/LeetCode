/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
//     let max = -Infinity;
    
    
//     for (let i = 0; i < nums.length; i++) {
//         let temp = 0;
//         for (let j = i; j < nums.length; j++) {
//             temp += nums[j];
//             max = Math.max(max, temp);
//         }
        
//     }
    
    let max = -Infinity;
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        max = Math.max(max, prev);
    }
    
    return max;
};