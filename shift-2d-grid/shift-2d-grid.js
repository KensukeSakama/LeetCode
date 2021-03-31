/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let hLen = grid[0].length;
    let vLen = grid.length;
    let flatgrid = grid.flat();
    k = k % flatgrid.length;
    
    console.log(flatgrid);
    let chunk = flatgrid.slice(flatgrid.length-k);
    
    flatgrid.splice(flatgrid.length-k, k);
    flatgrid.unshift(...chunk);
    let output = [];
    index = 0;
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            grid[i][j] = flatgrid[index];
            index++;
        }
    }
    return grid;

};