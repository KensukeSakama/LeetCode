/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b) => a-b);
    let max = 0;
    let counter = 0;
    let result;
    
    if (nums.length === 0) return null;
    if (nums.length < 2) return nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            counter++;
            if (counter > max) {
                max = counter;
                result = nums[i];
            }
        } else {
            counter = 0;
        }
    }
    
    return result;
};