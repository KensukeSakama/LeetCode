/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let temp = 0;
        for (let j = i; j < nums.length; j++) {
            temp += nums[j];
            max = Math.max(max, temp);
        }
        
    }
    return max;
};