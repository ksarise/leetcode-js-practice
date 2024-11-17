//125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let stack = [];
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    stack.push(s[i]);
  }
  let start = Math.ceil(n / 2);
  for (let i = start; i < n; i++) {
    if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return true;
};

//Best Runtime:
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleanedStr = s.replace(/[\W_]/g, "").toLowerCase();
  let leftPointer = 0;
  let rightPointer = cleanedStr.length - 1;

  while (leftPointer < rightPointer) {
    if (cleanedStr[leftPointer] !== cleanedStr[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;

  return true;
};

//Best Memory:
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  var start = 0;
  var end = s.length - 1;

  while (start < end) {
    while (!regex.test(s[start])) {
      start++;
    }

    while (!regex.test(s[end])) {
      end--;
    }

    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
