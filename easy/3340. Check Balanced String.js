//3340. Check Balanced String
// You are given a string num consisting of only digits.
//A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.
// Return true if num is balanced, otherwise return false.

////////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (Number(i) % 2 === 0) even += Number(num[i]);
    if (Number(i) % 2 !== 0) odd += Number(num[i]);
  }
  return even === odd;
};

//Best Runtime:
const isBalanced = (num) =>
  !num.split("").reduce((sum, n, i) => (i % 2 ? sum + +n : sum - +n), 0);

//Best Memory:
var isBalanced = function (num) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < num.length; i++) {
    let digit = parseInt(num[i]);

    if (i % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  return evenSum === oddSum;
};
