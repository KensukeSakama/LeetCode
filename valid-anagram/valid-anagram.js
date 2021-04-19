/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let storageS = {};
    let storageT = {};
    if (s.length !== t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        storageS[s[i]] === undefined ? storageS[s[i]] = 1 : storageS[s[i]]++; 
        storageT[t[i]] === undefined ? storageT[t[i]] = 1 : storageT[t[i]]++; 
    }
    
    for (let key in storageS) {
        if (storageS[key] !== storageT[key]) {
          return false;  
        } 
    }
    return true;
    
};