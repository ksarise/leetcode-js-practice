//20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 1ms
// Beats 89.34%%
// Memory 51.48MB
// Beats 34.92%

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stk = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stk.push(s[i]);
    } else {
      if (
        stk.length > 0 &&
        ((stk[stk.length - 1] === "(" && s[i] === ")") ||
          (stk[stk.length - 1] === "{" && s[i] === "}") ||
          (stk[stk.length - 1] === "[" && s[i] === "]"))
      ) {
        stk.pop();
      } else {
        return false;
      }
    }
  }
  return stk.length === 0;
};

//Best solution:
// Runtime 0ms
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let shouldPushItem = ["{", "(", "["];
  let popedItem = "";
  for (let i = 0; i < s.length; i++) {
    if (shouldPushItem.includes(s[i])) stack.push(s[i]);
    else if (s[i] === ")") {
      popedItem = stack.pop();
      if (popedItem !== "(") return false;
    } else if (s[i] === "]") {
      popedItem = stack.pop();
      if (popedItem !== "[") return false;
    } else if (s[i] === "}") {
      popedItem = stack.pop();
      if (popedItem !== "{") return false;
    }
  }
  if (stack.length === 0) return true;
  return false;
};

//Best Memory:
//Memory: 47.156mb

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (stack.length) {
      const last = stack[stack.length - 1];
      if (isPair(last, cur)) {
        stack.pop();
        continue;
      }
    }
    stack.push(cur);
  }
  return stack.length === 0;
};

var isPair = function (last, cur) {
  return (
    (last === "(" && cur === ")") ||
    (last === "{" && cur === "}") ||
    (last === "[" && cur === "]")
  );
};
