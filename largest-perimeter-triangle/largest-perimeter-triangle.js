/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b);
    let len = nums.length
    for (let i = len-1; i >= 0; i--) {
        let peri = nums[i] + nums[i-1] + nums[i-2]
        if (nums[i] < peri/2) {
            return peri;
        }
    }
    return 0;
};