/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
  let log = {}, num
  
  for (let i = 0; i < nums.length; i++){
    
    num = target - nums[i];
    
    if (log[nums[i]] !== undefined) {
      return [log[nums[i]], i]
    } 
    else {
      log[num] = i;  
    }
    
  }
  
};