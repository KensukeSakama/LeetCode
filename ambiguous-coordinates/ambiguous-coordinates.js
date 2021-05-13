/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
    //(0123);
    
    const addPoint = (num1, num2) => {
        
        for (let i = 0; i < num1.length; i++) {
            for (let j = 0; j < num2.length; j++) {
                let num1A = num1.substring(0, i) + '.' + num1.substring(i);
                let num2A = num2.substring(0, j) + '.' + num2.substring(j);
                
                if (Number(num1A).toString() === num1A && Number(num2A).toString() === num2A){
                    storage.add(`(${num1A}, ${num2A})`);
                }
                if (Number(num1).toString() === num1 && Number(num2A).toString() === num2A){
                    storage.add(`(${num1}, ${num2A})`);
                }
                if (Number(num1A).toString() === num1A && Number(num2).toString() === num2){
                    storage.add(`(${num1A}, ${num2})`);
                }
                
            }
        }
    }
    
    let storage = new Set();
    s = s.slice(1,s.length-1);
    
    
    for (let i = 0; i < s.length; i++) {
        let num1 = s.substring(0, i);
        let num2 = s.substring(i);
        if (Number(num1).toString() === num1 && Number(num2).toString() === num2){
            storage.add(`(${num1}, ${num2})`);
        }
        addPoint(num1, num2);
    }
    
    return Array.from(storage);
    
};