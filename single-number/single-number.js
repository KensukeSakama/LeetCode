/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let storage = {};
    nums.sort((a,b) => a-b);
    
    // for (let i = 0; i < nums.length; i++) {
    //     if (storage[nums[i]] === undefined) {
    //         storage[nums[i]] = 1;
    //     } else {
    //         storage[nums[i]]++;
    //     }
    // }
    // for (let key in storage) {
    //     if (storage[key] === 1) {
    //         return Number(key);
    //     }
    // }
    // return null;

    for (let i = 1; i < nums.length; i++) {
        if (i == 1 && nums[i-1] !== nums[i]) {
            return nums[i-1]
        }
        
        if (nums[i-1] !== nums[i] && nums[i] !== nums[i+1] ) {
            return nums[i];
        } 
    }
    return nums[nums.length-1];
};