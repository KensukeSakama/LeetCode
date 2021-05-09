/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if (nums.length === 0) return 0;
    let i = 1;
    while (i < nums.length) {
        if (nums[i-1] === nums[i]){
            nums.splice(i, 1)
            continue;
        }
        i++;
    }
    
    return nums.length;
    
};