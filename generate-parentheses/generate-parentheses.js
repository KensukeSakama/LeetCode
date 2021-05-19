/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let output = [];
    
    const helper = (left, right, str) => {
        console.log(str)
        if(left === n && right === n) {
            output.push(str);
            return;
        }
        
        if (left < n) helper(left+1, right, `${str}(`)
        if (left > right && right < n) helper(left, right+1, `${str})`)
        
    }
    
    helper(0, 0, '')
    return output;
};