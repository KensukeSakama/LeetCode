/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let output = Infinity;
    let minDiff = Infinity;
    
    nums.sort((a,b) => a-b);
    
    for (let left = 0; left < nums.length-2; left++) {
        let center = left + 1;
        let right = nums.length - 1;
        
        while (left < center && center < right) {
            let sum = nums[left] + nums[center] + nums[right];
            let currentDiff = target - sum;

            if (target === sum) {
                return sum;
            }

            if (Math.abs(currentDiff) < Math.abs(minDiff)) {
                minDiff = currentDiff;
                output = sum;
            }

            if (target < sum) {
                right--;
            }
            if (target > sum) {
                center++;
            }
        }
    
    }
    
    return output;
    
    
    
};