//2149. Rearrange Array Elements by Sign
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the the array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

///////////////////////////////////////////////////////////////////////////////

//My Solution:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let positive = [];
  let negative = [];
  for (let num of nums) {
    if (num > 0) {
      positive.push(num);
    } else {
      negative.push(num);
    }
  }

  let result = [];
  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i]);
    result.push(negative[i]);
  }

  return result;
};

//Best runtime:
var rearrangeArray = function (nums) {
  let result = new Int32Array(nums.length);
  let positiveIndex = 0,
    negativeIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[positiveIndex] = nums[i];
      positiveIndex += 2;
    } else {
      result[negativeIndex] = nums[i];
      negativeIndex += 2;
    }
  }
  return result;
};

//Best memory:
var rearrangeArray = function (nums) {
  const negatives = [];
  const positives = [];

  nums.forEach((num) => {
    if (num < 0) {
      negatives.push(num);
    } else {
      positives.push(num);
    }
  });

  negatives.reverse();
  positives.reverse();
  nums.forEach((_, i) => {
    if ((i + 1) % 2 === 0) {
      // isEven
      nums[i] = negatives.pop();
    } else {
      nums[i] = positives.pop();
    }
  });
  return nums;
};
