//217. Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/////////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};

//Best Runtime:
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

//Best Memory:
var containsDuplicate = function (nums) {
  /*
  I: array of numbers
  O: boolean value
  C: no constraints
  E: none

  Pseudocode
  sort array
  loop through array and compare next value to previous value
  */
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
