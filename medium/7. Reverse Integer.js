//7. Reverse Integer
//Given a signed 32-bit integer x, return x with its digits reversed.
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  const isNegative = x < 0;
  x = Math.abs(x);

  while (x !== 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (reversed > 0x7fffffff) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
};

//Best Runtime:
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (
    parseInt(Math.abs(x).toString().split("").reverse().join("")) > 2147483648
  ) {
    return 0;
  } else {
    if (x < 0) {
      return parseInt("-" + x.toString().split("").reverse().join(""));
    } else {
      return parseInt(x.toString().split("").reverse().join(""));
    }
  }
};

//Best Memory:
var reverse = function (x) {
  let bit = Math.pow(2, 31) - 1;

  let turn = x.toString().split("").reverse().join("");

  let result = parseInt(turn);

  if (result > bit || result < -bit) {
    return 0;
  }

  if (x < 0) {
    return -result;
  } else {
    return result;
  }
};
