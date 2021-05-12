/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    let trimmed = s.trim();
    // console.log(trimmed)
    let parsed = parseInt(trimmed, 10);
    // console.log(parsed)
    
    if (isNaN(parsed))return 0; 
    else if (parsed >= Math.pow(2, 31)) return Math.pow(2, 31)-1
    else if (parsed < Math.pow(-2, 31)) return Math.pow(-2, 31)
    else return parsed;
    
    
//     let isNegative = false;
//     let numPresent = false;
//     let index = 0;
//     let output = '';
    
//     const isNumber = (num) => {
//         if (num === undefined) return false;
//         if (num.charCodeAt(0) >= 48 && num.charCodeAt(0) <= 57) return true;
//         else return false;
          
//     }
    
//     while (index < s.length) {
//         let current = s[index];
        
//         if (current === '-') {
//             isNegative = true;
//         }
//         if (current === '.' && isNumber(s[index-1]) && isNumber(s[index+1])) {
//             output += current;
//             continue;
//         }
//         if (current === '.' && !isNumber(s[index-1]) && isNumber(s[index+1])) {
//             break;
//         }
//         if (current === "+" || current === " " || current === '-' || current === '.') {
//             s = s.slice(0, index) + s.slice(index+1);
//             continue;
//         }
//         if ((current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 122) && !numPresent) {
//             break;
//         }
//         if (isNumber(current)) {
//             numsPresent = true;
//             output += current;
//         }
//         index++;
        
//     }
    
//     // console.log("A".charCodeAt(0)) // 65
//     // console.log("z".charCodeAt(0)) //122
//     // console.log(parseInt('0032', 10))
//     // console.log(output);
    
//     if (output === "") return 0;
//     output = parseInt(output, 10);
//     if (output > 2147483648) output = 2147483648;
    
//     return isNegative ? output*-1 : output;
    
    
    
    
};