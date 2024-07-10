//26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates
//  in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
//  The remaining elements of nums are not important as well as the size of nums.
// Return k.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 60ms
// Beats 77.36%
// Memory 51.77MB
// Beats 83.15%
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let uniqueElements = new Set();
  for (let num of nums) {
    uniqueElements.add(num);
  }
  let i = 0;
  for (let unique of uniqueElements) {
    nums[i] = unique;
    i++;
  }
  return uniqueElements.size;
};

//Best Runtime:
//Runtime: 34ms
var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

//Best Memory:
//Memory: 45.9mb
var removeDuplicates = function (nums) {
  let k = 1;
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (current != nums[i]) {
      nums[k] = nums[i];
      current = nums[i];
      k += 1;
    }
  }
  return k;
};
