//342. Power of Four
// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  while (n % 4 === 0) {
    n /= 4;
  }
  return n === 1;
};

//Best solution:
var isPowerOfFour = function (n) {
  return Math.log2(n) % 2 === 0 && n > 0;
};
