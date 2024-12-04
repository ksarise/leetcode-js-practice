//2825. Make String a Subsequence Using Cyclic Increments
//You are given two 0-indexed strings str1 and str2.
//In an operation, you select a set of indices in str1, and for each index i in the set, increment str1[i] to the next character cyclically.
//That is 'a' becomes 'b', 'b' becomes 'c', and so on, and 'z' becomes 'a'.
//Return true if it is possible to make str2 a subsequence of str1 by performing the operation at most once, and false otherwise.
//Note: A subsequence of a string is a new string that is formed from the original string by deleting some (possibly none) of the characters without disturbing the relative positions of the remaining characters.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  let i = 0,
    j = 0;

  while (i < str1.length && j < str2.length) {
    if (
      str1[i] === str2[j] ||
      (str1[i].charCodeAt(0) - 97 + 1) % 26 === str2[j].charCodeAt(0) - 97
    ) {
      j += 1;
    }
    i += 1;
  }
  return j === str2.length;
};

//Best Runtime:
var canMakeSubsequence = function (str1, str2) {
  let p1 = 0;
  let p2 = 0;

  while (p1 !== str1.length && p2 !== str2.length) {
    if (str1[p1] === str2[p2] || str1[p1] === Rotate(str2[p2])) {
      p1++;
      p2++;
    } else {
      p1++;
    }
  }

  return p2 === str2.length;
};

var Rotate = function (c) {
  if (c === "a") {
    return "z";
  }

  return String.fromCharCode(c.charCodeAt(0) - 1);
};

//Best Memory:
var canMakeSubsequence = function (str1, str2) {
  let subIdx = 0;

  for (let i = 0; i < str1.length && subIdx < str2.length; i++) {
    if (areNeighborChars(str1[i], str2[subIdx])) {
      subIdx++;
    }
  }

  return subIdx === str2.length;
};

/**
 * @param {string} c1
 * @param {string} c2
 * @return {boolean}
 */
function areNeighborChars(c1, c2) {
  const distance = c2.charCodeAt(0) - c1.charCodeAt(0);
  // distance is -25 when we have 'a' and 'z'
  return [0, 1, -25].includes(distance);
}
