/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let targetNum = {};
    for (let i = 0; i < nums.length; i++) {
        let targetNumber = target - nums[i];

        if (targetNum[nums[i]] !== undefined) {
            return [targetNum[nums[i]], i];
        }

        targetNum[targetNumber] = i;
    }
};