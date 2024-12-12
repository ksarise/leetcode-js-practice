//1957. Delete Characters to Make Fancy String
//A fancy string is a string where no three consecutive characters are equal.
//Given a string s, delete the minimum possible number of characters from s to make it fancy.
//Return the final string after the deletion. It can be shown that the answer will always be unique.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let res = [];

  for (i = 0; i < s.length; i += 1) {
    if (i >= 2 && s[i] === s[i - 1] && s[i] === s[i - 2]) {
      continue;
    }
    res.push(s[i]);
  }
  return res.join("");
};

//Best solution:
var makeFancyString = function (s) {
  return s.replace(/(.)\1{2,}/g, "$1$1");
};
