/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    if (n === 1) return '1';
    
    const helper = (n, current,str) => {
        if (n-1 === current) return str;
        let counter = 1;
        let temp = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i-1] === str[i]) counter++;
            if (str[i] !== str[i+1]) {
                temp += String(counter) + String(str[i]);
                counter = 1;
            }       
        }
        // console.log(temp)
        return helper(n, current+1, temp)
    }
    
    return helper(n, 0, '1');
};