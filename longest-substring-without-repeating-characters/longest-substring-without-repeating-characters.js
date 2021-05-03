/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    if (s.length === 0) return max;
    
    let counter = {};
    
    for (let i = 0; i < s.length; i++) {
        let currentSubLen = 0;
        for (let j = i; j < s.length; j++) {
    
            if (!counter[s[j]]) {
                counter[s[j]] = 1;
                currentSubLen++;
            }
            else {
                counter = {}
                break;
            }
        }
        max = Math.max(currentSubLen, max);
    }
    
    return max;
    
    
};