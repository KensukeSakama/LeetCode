/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let storage = new Set();
    
    const helper = (nums, arr) => {
        // console.log(nums)
        // console.log(arr)
        
        if (nums.length === 0){
            storage.add(arr);
            return;
        }
        
        nums.forEach((a, index) => {
                let rest = nums.slice();
                rest.splice(index, 1);
                
                helper(rest, arr.concat(a))
        })
    }
    
    helper(nums, [])
    return Array.from(storage)
    
};