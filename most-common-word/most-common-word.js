/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let storage = {};
    let startChar = 'A'.charCodeAt(0);
    let endChar = 'z'.charCodeAt(0);
    
    console.log(paragraph)
    
    for (let i = 0; i < paragraph.length; i++) {
        let char = paragraph.charCodeAt(i);
        if (paragraph[i] === " ") continue;
        if (char < startChar || char > endChar) {
            paragraph = paragraph.slice(0, i) +' '+ paragraph.slice(i+1);
        }
    }
    
    console.log(paragraph)
    
    let para = paragraph.split(' ');
    
    console.log(para);
    
    for (let i = 0 ; i < para.length; i++) {
        let currentChar = para[i].toLowerCase()
        if (currentChar === "") continue;
        if (banned.includes(currentChar)) continue;
        
        if (storage[currentChar] === undefined) storage[currentChar] = 1;
        else storage[currentChar]++;
    }
    
    let max = Math.max(...Object.values(storage));
    
    for (let key in storage) {
        if (storage[key] === max) return key;
    }
    
    return '';

};