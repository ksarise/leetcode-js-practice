//205. Isomorphic Strings
//Given two strings s and t, determine if they are isomorphic.
//Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapST[charS] && mapST[charS] !== charT) {
      return false;
    }
    if (mapTS[charT] && mapTS[charT] !== charS) {
      return false;
    }
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
};

//Best Runtime:
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let map1 = [];
  let map2 = [];

  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] !== map2[t[i]]) return false;

    map1[s[i]] = i + 1;
    map2[t[i]] = i + 1;
  }

  return true;
};

//Best Memory:
var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;
};
