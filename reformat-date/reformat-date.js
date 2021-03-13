/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let month = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12}
    let data = date.split(' ');
    let output = '';
    output += data[2] + '-'
    
    if (month[data[1]] < 10) {
        output += '0' + String(month[data[1]]) + '-';
    } else {
        output += String(month[data[1]]) + '-';
    }
    
    let day = '';
    if (data[0].length > 3) {
        day = data[0].slice(0,2);
        output += day;
    } else {
        day = '0' + data[0].slice(0,1)
        output += day;
    }
    
    return output;
};