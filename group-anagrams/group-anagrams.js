/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //edge cases:
    //strs = empty array
    //strs = no anag
    
    if (strs.length <= 0) return [strs];
    
    //create a storage (array);
    let storage = {};
    let sorted
    
    //split strings & sort by forloop
    sorted = strs.map(a => {
        return [a.split('').sort().join('')];
    })
    console.log(sorted)
    
    for (let i = 0; i < strs.length; i++) {
        if (storage[sorted[i]] === undefined) {
            storage[sorted[i]] = [strs[i]];
        }
        else {
            storage[sorted[i]].push(strs[i]);
        }
    }
    
    let result = [];
    for (let i in storage){
        result.push(storage[i]);
    }
    
    return result;
    
    
};