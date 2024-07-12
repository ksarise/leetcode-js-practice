//392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
//  of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 44ms
// Beats 94.89%
// Memory 48.88MB
// Beats 76.67%
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex += 1;
    }
    tIndex += 1;
  }

  return sIndex === s.length;
};

//Best Runtime:
//Runtime: 28ms
var isSubsequence = function (s, t) {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  return sPointer === s.length;
};

//Best Memory:
//Memory: 45mb
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};
