/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const helper = (n) => {
        if (n < 2){
            return false;
        } else if (n === 2){
            return true;
        }
        if (n % 2 === 0){
            return false;
        }
        let sq = Math.sqrt(n);
        for (let i = 3; i <= Math.floor(sq); i+=2){
            if (n % i === 0){
                return false;
            }
        }
        return true;
    }
    
    let counter = 0;
    for (let i = 0; i < n; i++) {
        if (helper(i)){
            console.log(helper(i), i)
            counter++;
        }    
    }
    
    return counter;
};