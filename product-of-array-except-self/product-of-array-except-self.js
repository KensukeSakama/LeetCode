/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeros = false;
    let prod = nums.reduce((acc, num) => {
        if (num === 0 && !zeros) {
            zeros = true;
            return acc * 1
        } else if (num === 0 && zeros){
            return acc * 0;
        } else {
            return acc * num
        }
    }, 1)
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let output = Array(nums.length).fill(0)
            output[i] = prod;
            return output;
        } else {
            nums[i] = prod/nums[i];
        }
    }
    
    return nums;
};