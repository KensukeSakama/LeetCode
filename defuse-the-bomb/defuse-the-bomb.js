/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let output = [];
    
    if (code.length === 0) {
        return output;
    }
    
    if (k === 0){
        return Array(code.length).fill(0);
    }
    
    let array = code.concat(code);
    
    let start;
    if (k < 0) {
        start = code.length;
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            for (let j = start + k + i; j < start + i; j++) {
                sum += array[j];
            }
            output.push(sum);
        }
        
    } else {
        start = 0;
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            for (let j = start + k + i; j > start + i; j--) {
                sum += array[j]
            }
            output.push(sum);
        }
    }
        
    return output;
};