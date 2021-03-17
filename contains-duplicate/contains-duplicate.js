/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newSet = new Set (nums);
    if (newSet.size === nums.length) {
        return false;
    } else {
        return true;
    }
};