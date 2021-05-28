/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if (nums.length < 3) {
        if (nums[0] === target) return 0;
        if (nums[1] === target) return 1;
        return -1;
    }
    
    let left = 0;
    let right = nums.length-1;
    
    const helper = (nums, target, left, right) => {
        if (left > right) return -1;
        
        let mid = left + Math.floor((right-left)/2)
        
        if (nums[left] === target) return left;
        if (nums[mid] === target) return mid;
        if (nums[right] === target) return right;
        
        if (nums[left] < nums[mid]) {
            if (target > nums[left] && target < nums[mid]) {
                return helper(nums, target, left, mid-1);
            }
            return helper (nums, target, mid+1, right);    
        } 
        if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target < nums[right]) {
                return helper(nums, target, mid+1, right);
            }
            return helper (nums, target, left, mid-1);    
        } 
        return -1;
    }
    
    let result = helper(nums, target, left, right);
    return result;
    
};