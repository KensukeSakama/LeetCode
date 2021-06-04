/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    let grids = new Array()
    for (let start = 0; start < 9; start++) grids.push([]);
    
    //horizontal:
    const horizon = (board, bool) => {
        for (let i = 0; i < board.length; i++) {
        
            let newSet = new Set(board[i]);
            let arr = [];
            board[i].forEach((a, index) => {     
                if (bool === true) {
                    // console.log(a, i, index, i+index);
                    let gridNum;
                    if (i < 3) {
                        if (index < 3) gridNum = 0;
                        else if (index < 6) gridNum = 1;
                        else gridNum = 2;
                    }
                    else if (i < 6) {
                        if (index < 3) gridNum = 3;
                        else if (index < 6) gridNum = 4;
                        else gridNum = 5;
                    }
                    else {
                        if (index < 3) gridNum = 6;
                        else if (index < 6) gridNum = 7;
                        else gridNum = 8;
                    }
                    grids[gridNum].push(a);
                    // console.log(gridNum, grids[gridNum])
                }
                
                if (a !== '.') arr.push(a);
            });
            
            // console.log(newSet.size-1, arr.length)
            if (newSet.size - 1 !== arr.length) {
                // console.log(i, newSet, arr)
                return false;
            }
        }    
        return true;
    }
    
    //vertical:
    const vertical = (board) => {
        
        for (let ver = 0; ver < board.length; ver++) {
            let temp = {};
            for (let hor = 0; hor < board.length; hor++) {
                // console.log(board[hor][ver])
                if (board[hor][ver] === '.') continue;
                
                if (temp[board[hor][ver]] === undefined) {
                    temp[board[hor][ver]] = 1
                } 
                else return false;
            }
            // console.log(temp)
        }
        return true;
    }                            
    
    let hor = horizon(board, true)
    let ver = vertical(board)
    let grid = horizon(grids, false);
    // console.log(hor, ver, grid)
    if (hor && ver && grid) return true;
    else return false;
};