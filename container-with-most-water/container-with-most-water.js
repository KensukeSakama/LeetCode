/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length-1;
    
    const helper = (left, right) => {
        if (left === right) {
            return;
        }
        let width = right - left;
        let minHeight = height[left] < height[right] ? height[left] : height[right];
        if (minHeight * width > max) {
            max = minHeight * width;
        }
        if (height[left] < height[right]){
            helper (left+1, right);    
        } else {
            helper (left, right-1);    
        }
    }
    helper(left, right);
    return max;
};