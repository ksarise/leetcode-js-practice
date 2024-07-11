//14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 49ms
// Beats 86.48%
// Memory 49.24MB
// Beats 60.84%
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i += 1) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

//Best Runtime:
//Runtime: 29ms
var longestCommonPrefix = function (strs) {
  strs.sort();
  let firstString = strs[0];
  let lastString = strs[strs.length - 1];
  let index = 0;
  for (index = 0; index < firstString.length; index++) {
    if (firstString.charAt(index) !== lastString.charAt(index)) {
      break;
    }
  }
  return index == 0 ? "" : firstString.substring(0, index);
};

//Best Memory:
//Memory: 46.6mb
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
