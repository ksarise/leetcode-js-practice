//69. Sqrt(x)
//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator.

/////////////////////////////////////////////////////////////////////////////////

//My solution:

var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

//Best Runtime LOL:
var mySqrt = function (x) {
  let x1 = Math.sqrt(x);
  let x2 = Math.floor(x1);

  return x2;
};

//Best Memory:
var mySqrt = function (x) {
  left = 1;
  right = x;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid == x) return mid;
    else if (mid * mid > x) right = mid - 1;
    else if (mid * mid < x) left = mid + 1;
  }
  return right;
};
