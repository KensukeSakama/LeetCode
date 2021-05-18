/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const comb = {
        1 : [],
        2 : ['a', 'b', 'c'],
        3 : ['d', 'e', 'f'],
        4 : ['g','h','i'],
        5 : ['j','k','l'],
        6 : ['m','n','o'],
        7 : ['p','q','r','s'],
        8 : ['t','u','v'],
        9 : ['w','x','y', 'z']
    }
    
    let output = []

    const helper = (digits, result = '') => {
        if (!digits) {
            output.push(result);
            return;
        } 
        
        comb[digits[0]].forEach(digit => {
            helper(digits.slice(1), result + digit);
        })
        
    }

    helper(digits);
    return output;

};