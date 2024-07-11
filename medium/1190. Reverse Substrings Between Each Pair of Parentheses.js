//1190. Reverse Substrings Between Each Pair of Parentheses

// You are given a string s that consists of lower case English letters and brackets.
// Reverse the strings in each pair of matching parentheses, starting from the innermost one.
// Your result should not contain any brackets.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 55ms
// Beats 68.52%
// Memory 51.56MB
// Beats 35.18%
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = [];
  for (let char of s) {
    if (char === ")") {
      let buffer = "";
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        buffer += stack.pop();
      }
      stack.pop();
      for (let c of buffer) {
        stack.push(c);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

//Best Runtime:
//Runtime: 44ms
var reverseParentheses = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let str = [];
      while (stack[stack.length - 1] !== "(") {
        str.push(stack.pop());
      }
      stack.pop(); // remove '('
      stack = [...stack.concat(str)];
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join("");
};

//Best Memory:
//Memory: 49.1mb
var reverseParentheses = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let leftIndex = arr.lastIndexOf("(");
      let deletedArr = arr.splice(leftIndex);
      deletedArr.shift();
      arr.push(...deletedArr.reverse());
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};
