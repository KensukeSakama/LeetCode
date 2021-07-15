/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  
  
  
  //let process = ['forward', 'vertical', 'reverse', 'ver-reverse'];
  
  let start = 0,
      end = matrix.length * matrix[0].length;
  
  let direction = 0,
      row = 0,
      col = 0,
      offset = 0,
      result = [];
      
  const helper = () => {
    
    //right
    if (direction === 0) {
      if (row === matrix[0].length-1 - offset) direction++, col++;
      else row++; 
    }
    //down
    else if (direction === 1) {
      if (col === matrix.length-1 - offset) direction++, row--;
      else col++;
    }
    //left
    else if (direction === 2) {
      if (row === offset) direction++, col--, offset++;
      else row--;
    }
    //up
    else {
      if (col === offset) direction = 0, row++;
      else col--;
    }
  }
  
  while (start < end){
    result.push(matrix[col][row]);
    helper();
    start++;
  }
  
  return result;
  
};