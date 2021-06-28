/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    let storage = {};
    
    const helper = (nums, arr) => {
        
        if (nums.length === 0) {
            if (storage[arr] === undefined){
                storage[arr] = arr;
            }
            return;
        }
        
        nums.forEach((a, index) => {
            let array = nums.slice();
            array.splice(index, 1)
            helper(array, arr.concat(a))
        })
    }
    
    helper(nums, []);
    return Array.from(Object.values(storage));
    
};