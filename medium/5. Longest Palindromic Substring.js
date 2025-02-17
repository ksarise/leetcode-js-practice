//5. Longest Palindromic Substring
//Given a string s, return the longest palindromic substring in s.

///////////////////////////////////////////////////////////////////////////////

//My and only solution:
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 0) return "";
  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxEnd - maxStart + 1) {
        maxStart = l;
        maxEnd = r;
      }
      l--;
      r++;
    }
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxEnd - maxStart + 1) {
        maxStart = l;
        maxEnd = r;
      }
      l--;
      r++;
    }
  }

  return s.substring(maxStart, maxEnd + 1);
};
