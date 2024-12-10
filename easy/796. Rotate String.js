//796. Rotate String
//Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
//A shift on s consists of moving the leftmost character of s to the rightmost position.
//For example, if s = "abcde", then it will be "bcdea" after one shift.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  return (s + s).includes(goal);
};

//Best Runtime:
var rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};

//Best Memory:
var rotateString = function (s, goal) {
  let k = 0;
  let str = s.concat(s);
  while (k < s.length) {
    if (str.slice(k, k + s.length) == goal) return true;
    k++;
  }

  return false;
};
