//326. Power of Three
//Given an integer n, return true if it is a power of three. Otherwise, return false.
//An integer n is a power of three, if there exists an integer x such that n == 3^x.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

//Best Runtime:
var isPowerOfThree = function (n) {
  while (n > 1) n = n / 3;
  return n === 1;
};

//Best Memory:
var isPowerOfThree = function (n) {
  if (n == 0) return false;
  if (n == 1) return true;
  if (n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);
};

//Best funny solution:
var isPowerOfThree = function (n) {
  for (i = 0; i <= 100; i++) {
    if (n == Math.pow(3, i)) {
      return true;
    }
  }
  return false;
};
