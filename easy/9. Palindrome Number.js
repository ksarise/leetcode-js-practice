//9. Palindrome Number
//Given an integer x, return true if x is a palindrome, and false otherwise.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 7ms
// Beats 72.78%
// Memory 58.92MB
// Beats 25.66%
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let num = x;
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return x === rev;
};

//Best Runtime:
//Runtime: 2ms
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num = x;
  let reversedNum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return x === reversedNum;
};

//Best Memory:
//Memory: 50.9mb
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let str = x.toString();
  let reversedString = str.split("").reverse().join("");

  return str === reversedString;
};
