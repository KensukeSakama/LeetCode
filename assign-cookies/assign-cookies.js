/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let kids = g.sort((a,b)=>{a-b});
    let cookies = s.sort((a,b)=>{return a-b});
    
    let happyKids = kids.filter(hunger => {
        for (let i = 0; i < cookies.length; i++) {
            if (hunger <= cookies[i]) {
                cookies.splice(i,1);
                return true;
            }
        }
        return false;
    }).length;
    
    return happyKids;    
};