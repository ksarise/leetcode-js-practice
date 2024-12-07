//219. Contains Duplicate II
//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

////////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const dup = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (dup.has(nums[i]) && i - dup.get(nums[i]) <= k) {
      return true;
    }
    dup.set(nums[i], i);
  }
  return false;
};

//Best runtime:
var containsNearbyDuplicate = function (nums, k) {
  const hash = nums.reduce((acc, e, i) => {
    if (e in acc) {
      acc[e].push(i);
    } else {
      acc[e] = [i];
    }
    return acc;
  }, {});

  for (const num in hash) {
    if (hash[num].length < 2) {
      continue;
    }

    for (let i = 1; i < hash[num].length; i++) {
      if (hash[num][i] - hash[num][i - 1] <= k) {
        return true;
      }
    }
  }

  return false;
};

//Best memory:
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
