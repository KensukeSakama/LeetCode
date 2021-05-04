/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (s.length === 0) {
    return 0;
  }

  let cov = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000,
  }

  let output = 0;
  let prev = cov[s[s.length-1]];

  for (let i = s.length-1; i >= 0; i--) {
    if (cov[s[i]] < prev) {
      output-=cov[s[i]]
      prev = cov[s[i]]
    } else {
      output+=cov[s[i]]
      prev = cov[s[i]]
    }
  }

  return output;

};