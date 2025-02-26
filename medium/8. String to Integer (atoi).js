//8. String to Integer (atoi)
//Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
//The algorithm for myAtoi(string s) is as follows:
//Whitespace: Ignore any leading whitespace (" ").
//Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
//Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached.
//If no digits were read, then the result is 0.
//Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range.
//Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
//Return the integer as the final result.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let index = 0;
  const n = s.length;
  let sign = 1;
  let result = 0;
  while (index < n && s[index] === " ") {
    index++;
  }
  if (index < n && (s[index] === "+" || s[index] === "-")) {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }
  while (index < n && s[index] >= "0" && s[index] <= "9") {
    const digit = s[index] - "0";

    if (result > Math.floor((2 ** 31 - 1 - digit) / 10)) {
      return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
    }
    result = result * 10 + digit;
    index++;
  }

  return result * sign;
};

//Best solution:
var myAtoi = function (s) {
  const MIN_INT = -2147483648;
  const MAX_INT = 2147483647;
  let number = !parseInt(s, 10) ? 0 : parseInt(s, 10);

  if (MIN_INT < number) {
    if (number < MAX_INT) {
      return number;
    } else {
      return MAX_INT;
    }
  } else {
    return MIN_INT;
  }
};
