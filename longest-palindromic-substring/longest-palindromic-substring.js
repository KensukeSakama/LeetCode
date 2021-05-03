/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if (s.length === 0) return '';
    if (s.length === 1) return s;
    if (s.length === 2) {
        if (s[0] === s[1]) return s;
        else return s[0];
    }
    
    const helper = (left, right, str) => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.slice(left+1, right)
    }
    
    let output = '';
    for (let i = 0; i < s.length; i++) {
        let left = helper(i, i, s);
        let right = helper(i, i+1, s);
        if (output.length < left.length) output = left;
        if (output.length < right.length) output = right;
    }
    
    return output;
    
};