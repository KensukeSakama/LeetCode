/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    let targetNum = target.charCodeAt(0);
    let minChar = letters[0];
    let result;
    
    for (let i = 0; i < letters.length; i++) {
        let letterNum = letters[i].charCodeAt(0);
        min = Math.min(minChar.charCodeAt(0), letters[i].charCodeAt(0));
        if (letterNum > targetNum && result === undefined) result = letters[i];
        if (letterNum > targetNum && letterNum < result.charCodeAt(0)) result = letters[i];
    }
    
    if (result === undefined) return minChar;
    else return result;
    
};