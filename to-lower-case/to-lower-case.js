/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let lowerCase = {
        A:'a',
        B:'b',
        C:'c',
        D:'d',
        E:'e',
        F:'f',
        G:'g',
        H:'h',
        I:'i',
        J:'j',
        K:'k',
        L:'l',
        M:'m',
        N:'n',
        O:'o',
        P:'p',
        Q:'q',
        R:'r',
        S:'s',
        T:'t',
        U:'u',
        V:'v',
        W:'w',
        X:'x',
        Y:'y',
        Z:'z'
    };
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (lowerCase[str[i]] !== undefined) {
            output += lowerCase[str[i]];
        } else {
            output += str[i];
        }
    }
    return output;
};