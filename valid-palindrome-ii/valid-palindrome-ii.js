/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let tracker = false;    
    let secondTry = false;
    let sArr = s.split('').slice();
    let n = sArr.slice().reverse();
    let i = 0;
    
    while (sArr[i]){
        if (sArr[i] !== n[i] && tracker === true && secondTry === true){
            return false;
        }
        if (sArr[i] !== n[i] && tracker === true && secondTry === false){
            secondTry = true;
            tracker = false;
            n = s.split('').slice()
            sArr = n.slice().reverse();
            i = 0;
            continue;
        }
        if (sArr[i] !== n[i] && tracker === false){
            tracker = true;
            sArr.splice(i, 1);
            n = sArr.slice().reverse();
            i = 0;
            continue;
        }
        i++;
    }
    return true;

};