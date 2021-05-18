/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    if (nums.length < 4) return [];
    
    let output = [];
    let set = new Set();
    nums.sort((a, b) => a-b);
    
    for (let i = 0; i < nums.length-3; i++) {
        let base = nums[i];
        for (let j = i+1; j < nums.length-2; j++) {
            let current = j;
            let right = nums.length-1;
            let left = j+1;
            
            while (current < left && left < right) {
                let sum = base + nums[current] + nums[left] + nums[right];
                
                if (sum === target) {
                    // console.log(sum,'--',[base, nums[current], nums[left], nums[right]])
                    if (!set.has(String([base, nums[current], nums[left], nums[right]]))) {
                        set.add(String([base, nums[current], nums[left], nums[right]]))
                        output.push([base, nums[current], nums[left], nums[right]])    
                    }
                    left++;
                }
                
                if (sum < target) {
                    left++;
                }
                if (sum > target) {
                    right--;
                }
            }
        }
    }
    
    return output;
    
    
};