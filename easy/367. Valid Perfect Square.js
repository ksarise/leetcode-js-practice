//367. Valid Perfect Square
// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;

  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

//Best Runtime lol:
var isPerfectSquare = function (num) {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) return true;
  }
  return false;
};

//Best Memory LOL:
var isPerfectSquare = function (num) {
  let sqrt = Math.sqrt(num);
  return sqrt === parseInt(sqrt);
};
