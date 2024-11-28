//67. Add Binary
//Given two binary strings a and b, return their sum as a binary string.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};

//Best Runtime:
var addBinary = function (a, b) {
  let sum = BigInt("0b" + a) + BigInt("0b" + b);
  return sum.toString(2);
};

//Best Memory:
var addBinary = (a, b) => (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
