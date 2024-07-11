//58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

///////////////////////////////////////////////////////////////////////////////

//Simple solution:
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").at(-1).length;
};

//My solution:
// Runtime 47ms
// Beats 80.60%
// Memory 48.91MB
// Beats 34.96%
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = 0;
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") {
    i -= 1;
  }
  while (i >= 0 && s[i] !== " ") {
    result++;
    i -= 1;
  }
  return result;
};

//Best Runtime:
//Runtime: 27ms
var lengthOfLastWord = function (s) {
  // s=s.trim();
  // let arr = s.split(' ');
  // return arr.pop().length
  let noSpace = s.trim();

  let arrayOfLetters = noSpace.split(" ");

  let finalWord = arrayOfLetters.pop();

  return finalWord.length;
};

//Best Memory:
//Memory: 44.5mb
var lengthOfLastWord = function (s) {
  let res = 0,
    counter = s.length - 1;
  while (s[counter] === " ") {
    counter--;
  }

  while (s[counter] !== " " && counter >= 0) {
    res++;
    counter--;
  }
  return res;
};
