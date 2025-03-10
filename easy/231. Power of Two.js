//231. Power of Two
//Given an integer n, return true if it is a power of two. Otherwise, return false.
//An integer n is a power of two, if there exists an integer x such that n == 2x.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};

//Best solution:
var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0;
};

//Best Memory:
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) == 0;
};
