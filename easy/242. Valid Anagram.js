//242. Valid Anagram
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

///////////////////////////////////////////////////////////////////////////////

//My solution:
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return s.split("").sort().join("") === t.split("").sort().join("");
};

//Best runtime:
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let charCount = new Array(256).fill(0);
  for (let i = 0; i < s.length; ++i) {
    charCount[s.charCodeAt(i)]++;
  }
  for (let i = 0; i < t.length; ++i) {
    charCount[t.charCodeAt(i)]--;
    if (charCount[t.charCodeAt(i)] < 0) return false;
  }
  return true;
};

//Best memory:
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  let freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] != 0) return false;
  }
  return true;
};
