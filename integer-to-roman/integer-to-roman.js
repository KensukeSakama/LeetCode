/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num.length === 0) {
        return '';
    }

  const nums = [1000, 500, 100, 50, 10, 5, 1];
  const char = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let output = '';
    for (let i = 0; i < nums.length; i++) {
        if (num >= nums[i]) {
            if (`${num}`[0] === '9') {
                output += char[i+1] + char[i-1];
                num %= +('1' + '0'.repeat(`${num}`.length-1));
            } else if (`${num}`[0] === '4') {
                output += char[i] + char[i-1];
                num %= +('1' + '0'.repeat(`${num}`.length-1));
            } else {
                output += char[i].repeat(parseInt(num/nums[i], 10));
                num %= nums[i];
            }
        }
    }
    
    return output;

};

