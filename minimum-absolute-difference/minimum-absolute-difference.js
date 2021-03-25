/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let storage = {};
    let minimum = null;
    
    arr.sort((a,b) => a-b);
    
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i+1]){
            break;
        }
        let diff = [arr[i+1]-arr[i]]
        
        if (!minimum || Number(minimum) > Number(diff)) {
            console.log('min in conditional:', minimum)
            minimum = diff;
        }
        
        if (storage[diff] === undefined) {
            storage[diff] = [[arr[i], arr[i+1]]]
        } else {
            storage[diff].push([arr[i], arr[i+1]])
        }
        console.log('min:', minimum, 'diff:', diff)
    }
    console.log(storage);
    return storage[minimum];
};