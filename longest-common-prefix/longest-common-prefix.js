/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0 || !strs) {
        return '';
    }
    let output = '';
    let str = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        if (str.length > strs[i].length){
            str = str.slice(0, strs[i].length);
        }
        for (let j = 0; j < strs[i].length; j++) {
            if (str.length === 0) {
                return '';
            }
            if (str[j] !== strs[i][j]) {
                str = str.slice(0, j);
                continue;
            }   
        }
    }
    
    return str;

};