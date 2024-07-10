//27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
//  Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
//  The remaining elements of nums are not important as well as the size of nums.
// Return k.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 49ms
// Beats 80.25%
// Memory 48.88MB
// Beats 60.69%
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  return k;
};

//Best Runtime:
//Runtime: 22ms
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
};

//Best Memory:
//Memory: 46.4mb
var removeElement = function (nums, val) {
  let shiftIdx = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[shiftIdx] = nums[i];
      shiftIdx++;
    }
  }

  return shiftIdx;
};
