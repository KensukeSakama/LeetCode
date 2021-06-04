/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0]) return 0;
    if (target > nums[nums.length-1]) return nums.length;
    
    let left = 0
    let right = nums.length-1;
    
    const helper = (nums, target, left, right) => {
        
        let mid = Math.floor(left + (right-left)/2)
        
        if (left > right) return;
        
        if (nums[mid-1] < target && target <= nums[mid]) {
            return mid;
        }
        if (nums[mid] < target && target <= nums[mid+1]) {
            return mid+1;
        }
        
        if (target > nums[mid]) {
            return helper(nums, target, mid+1, right)
        } else {
            return helper(nums, target, left, mid-1)
        }
        
    }
    
    let result = helper(nums, target, left, right)
    return result;
};