//202. Happy Number
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

///////////////////////////////////////////////////////////////////////////////

//My Solution:
var isHappy = function (n) {
  const seen = new Set();

  const getSumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getSumOfSquares(n);
  }

  return n === 1;
};

//Best Memory:
var isHappy = function (n) {
  if (n === 1) {
    return true;
  }

  if (n === 4) {
    return false;
  }

  n = n.toString();

  let sum = 0;

  while (n.length !== 0) {
    const num = parseInt(n.charAt(n.length - 1));
    n = n.slice(0, -1);
    sum = sum + num * num;
  }

  return isHappy(sum);
};
