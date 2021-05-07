/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let validator = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    
    let storage = [];
    let i = 0;
    if (s.length % 2 === 1) return false;
    
    while (i < s.length) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            storage.push(s[i])
        } 
        else if (storage.pop() !== validator[s[i]] ) {
            return false;
        }
        i++
    }
    
    if (storage.length > 0) return false;
    else return true;
    
};