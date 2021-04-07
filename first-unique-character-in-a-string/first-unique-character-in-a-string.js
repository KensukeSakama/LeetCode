/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let storage = {};
    for (let i = 0; i < s.length; i++) {
        let temp = s.slice(i+1);
        if (temp.indexOf(s[i]) === -1 && storage[s[i]]=== undefined) {
            return i;
        } 
        if (storage[s[i]] === undefined) {
            storage[s[i]] = 1;
        } else {
            storage[s[i]]++;
        }
    }
    
    return -1;
};