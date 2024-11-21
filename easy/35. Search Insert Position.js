//35. Search Insert Position
//Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

//Best memory:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (r >= l) {
    if (nums[mid] == target) return mid;
    else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
    mid = Math.floor((l + r) / 2);
  }

  return nums[mid] > target ? mid : mid + 1;
};
