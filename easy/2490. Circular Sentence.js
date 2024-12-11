//2490. Circular Sentence
//A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
//For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
//Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.
//A sentence is circular if:
//The last character of each word in the sentence is equal to the first character of its next word.
//The last character of the last word is equal to the first character of the first word.
//For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
//Given a string sentence, return true if it is circular. Otherwise, return false.

///////////////////////////////////////////////////////////////////////////////

//My Solution:
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i += 1) {
    let curr = arr[i];
    let next = arr[(i + 1) % arr.length];
    if (curr[curr.length - 1] !== next[0]) return false;
  }
  return true;
};

//Best Runtime:
var isCircularSentence = function (s) {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === " ") {
      if (s[i - 1] !== s[i + 1]) {
        // as per question - before space char, and after space char - els are not equal
        return false;
      }
    }
  }
  return s[0] === s[n - 1]; // 1st and last
};

//Best Memory:
var isCircularSentence = function (sentence) {
  const words = sentence.split(" ");
  for (let i = 1, n = words.length; i < n; i += 1) {
    if (words[i - 1].at(-1) !== words[i][0]) return false;
  }

  if (words[0][0] !== words.at(-1).at(-1)) return false;
  return true;
};
