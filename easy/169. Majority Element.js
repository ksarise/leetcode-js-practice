//169. Majority Element
//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 47ms
// Beats 97.69%
// Memory 53.14MB
// Beats 22.97%
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let major = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      major = num;
    }
    count += num === major ? 1 : -1;
  }
  return major;
};

//Best Runtime:
//Runtime: 31ms
var majorityElement = function (nums) {
  let candidate = null;
  let k = 0;
  for (const n of nums) {
    if (k === 0) {
      candidate = n;
      k = 1;
    } else if (candidate === n) {
      k++;
    } else {
      k--;
    }
  }
  return candidate;
};

//Best Memory:
//Memory: 47.4mb
var majorityElement = function (nums) {
  let HashMap = {};
  nums.forEach((element) => {
    if (HashMap[element] === undefined) {
      HashMap[element] = 1;
    } else {
      HashMap[element]++;
    }
  });

  return Object.keys(HashMap).reduce((a, b) =>
    HashMap[a] > HashMap[b] ? a : b
  );
};
