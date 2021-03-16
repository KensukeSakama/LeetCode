/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let output = {};
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words.length; j++) {
            if (words[i] === words[j]) {
                continue;    
            }
            if (words[j].indexOf(words[i]) !== -1){
                output[words[i]] = 1;
            }
        }
    }
    return Object.keys(output);
};