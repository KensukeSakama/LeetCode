/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let output = [-1, -1];
    
    if (nums.length === 0) return [-1, -1];    
    if (nums[0] === target && nums[nums.length-1] === target) return [0, nums.length-1]
    
    const helper = (nums, target, left, right) => {
        
        if (left > right) return;
        
        let mid = Math.floor(left + ((right-left)/2));
        
        if (nums[mid] === target) {
            let l = mid;
            let r = mid;
            while (nums[l] !== undefined || nums[r] !== undefined) {
                if (nums[l] !== target && nums[r] !== target) break;
                if (nums[l] === target) output[0] = l;
                if (nums[r] === target) output[1] = r;
                l--;
                r++;
            }
            return;
        }
        
        if (nums[mid] > target) {
            helper(nums, target, left, mid-1);
        } else {
            helper(nums, target, mid+1, right);
        }
    }
    
    helper(nums, target, 0, nums.length-1);
    return output;

};