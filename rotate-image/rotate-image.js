/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let len = matrix.length-1;
    let target = 0;
    
    while (len >= 0 && target < matrix.length) {
        for (let i = matrix.length-1; i >= 0; i--) {
            matrix[target].push(matrix[i][0]);
            matrix[i].splice(0,1);
        }
        target++;
        len--;
    }
    
    return matrix;
    
};