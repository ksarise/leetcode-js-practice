//268. Missing Number
//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};

//Best Runtime and Solution:
var missingNumber = function (nums) {
  let total = 0;

  for (let i = 0; i <= nums.length; i++) {
    total = total + i;
    if (i < nums.length) {
      total = total - nums[i];
    }
  }

  return total;
};

//Best Memory:
var missingNumber = function (nums) {
  let xor = 0;
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }
  for (let num of nums) {
    xor ^= num;
  }
  return xor;
};
