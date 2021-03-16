/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let counter = 0;
    
    const helper = (board, r0, c0) => {
        for (let i = c0; i < board[r0].length; i++) {
            if (board[r0][i] === 'X') {
                board[r0][i] = counter;
            } else {
                break;
            }
        }
        for (let i = r0+1; i < board.length; i++) {
            if (board[i][c0] === 'X') {
                board[i][c0] = counter;
            } else {
                break;
            }
        }
    }
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === 'X'){
                counter++;
                helper(board, row, col);
            }
        }
    }
    

    
    return counter;
};