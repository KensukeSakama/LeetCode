/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
//     if (nums.length < 3) return [];
    
//     let output = [];
//     nums = nums.sort((a,b) => a-b);
    // let outputSet = new Set();
    
    
//     for (let i = 0; i < nums.length-2; i++) {
//         for (let j = i+1; j < nums.length-1; j++) {
//             for (let k = j+1; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     let temp = [nums[i], nums[j], nums[k]].sort((a,b) => a-b)
//                     if (outputSet.has(String(temp))) {
//                         continue;
//                     } else {
//                         outputSet.add(String(temp));
//                         output.push(temp);
//                     }
//                 }
//             }
//         }
//     }
    
//     console.log(output)
//     return Array.from(output);
    
    if (nums.length < 3) return [];
    let output = [];
    let newSet = new Set();
    nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] > 0) break;
        let current = nums[i]
        let left = i + 1;
        let right = nums.length-1;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        while (left < right) {
            let sum = current + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0){
                left++;
            } else {
                output.push([current, nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                right--;
                left++;
            }
        }
    }
    
    return output;
  

    // let resultArr = [];
    // const sortedArr = nums.sort((a, b) => a - b);
    // for (i = 0; i < sortedArr.length - 2; i++) {
    //   if (sortedArr[i] > 0) {
    //     break;
    //   }
    //   if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
    //     continue;
    //   }
    //   let left = i + 1;
    //   let right = sortedArr.length - 1;
    //   while (left < right) {
    //     const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
    //     if (sum < 0) {
    //       left++;
    //     } else if (sum > 0) {
    //       right--;
    //     } else {
    //       resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
    //       while(left < right && sortedArr[left] === sortedArr[left + 1]) {
    //         left++;
    //       }
    //       while(left < right && sortedArr[right] === sortedArr[right - 1]) {
    //         right--;
    //       }
    //       left++;
    //       right--;  
    //     }
    //   }
    // }
    // return resultArr;

};