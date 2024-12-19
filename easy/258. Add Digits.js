//258. Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
};

//Best solution:
var addDigits = (num) => {
  if (num == 0) return 0;
  return 1 + ((num - 1) % 9);
};
