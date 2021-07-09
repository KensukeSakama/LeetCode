/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let globalMax = 0;
    let localMax = 0;
    let step = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (localMax < i) { // prevent the last index cannot reach
            return -1;
        }
        if (localMax > nums.length - 1) {
            break;
        }
        const cur = i + nums[i]; // farest we can reach for index i
        globalMax = Math.max(globalMax, cur);
        if (localMax == i) {
            localMax = globalMax;
            step++;
        }
    }
    return step;
};