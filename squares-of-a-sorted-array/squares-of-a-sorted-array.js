/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let square = nums.map((num) => num*num);
    square.sort((a,b) => (a-b));
    return square;
};