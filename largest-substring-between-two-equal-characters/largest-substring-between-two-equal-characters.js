/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    
    let left = 0;
    let right = s.length-1;
    let max = -1

    for (let i = 0; i < s.length; i++) {
        for (let j = s.length-1; j > i; j--) {
            if (s[i] === s[j]) {
                max = Math.max(j-i-1, max)
            }
        }
    }
    
    return max;
};