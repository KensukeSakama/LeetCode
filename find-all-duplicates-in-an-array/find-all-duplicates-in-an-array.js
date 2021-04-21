/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let output = [];
    let storage = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (storage[nums[i]] === undefined) storage[nums[i]] = 1;
        else storage[nums[i]]++;
    }
    for (let key in storage) {
        if (storage[key] === 2) output.push(key)
    }
    return output;
    
};