/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {

//   let result = 0;

//   const helper = (piles, turn, lee, alex) => {
//     // console.log(piles, turn, lee, alex)
//     let choices = [0, piles.length-1];

//     if (!piles.length) {
//       let res = alex > lee ? 1 : 0;
//       result += res;
//       return;
//     }

//     choices.forEach(a => {
//       if (turn % 2 === 0) {
//         // console.log('alex', piles[a])
//         alex += piles[a];
//       }
//       else {
//         // console.log('lee', piles[a])
//         lee += piles[a];
//       }
//       let newPiles = piles.slice()
//       newPiles.splice(a,1)
//       return helper(newPiles, turn+1, lee, alex)
//     })

//   }

//   helper(piles, 0, 0, 0);
//   return result > 0 ? true : false;

    const n = piles.length;
    
    const memo = [];
    
    for (let i = 0; i < n; i++) {
        memo[i] = [];
    }
    
    return topDown(0, n - 1, 1) > 0;
    
    function topDown(start, end) {
        if (start == end) return piles[start];
        if (memo[start][end]) return memo[start][end];
        
        const startPick = piles[start] - topDown(start + 1, end);
        const endPick = piles[end] - topDown(start, end - 1);
        
        const res = Math.max(startPick, endPick);
        
        memo[start][end] = res;
        
        return res;
    }
  
  
};