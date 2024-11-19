//2461. Maximum Sum of Distinct Subarrays With Length K
//You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
//The length of the subarray is k, and
//All the elements of the subarray are distinct.
//Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.
//A subarray is a contiguous non-empty sequence of elements within an array.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let maxSum = 0;
  let currentSum = 0;
  let windowSet = new Set();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (windowSet.has(nums[right])) {
      windowSet.delete(nums[left]);
      currentSum -= nums[left];
      left++;
    }
    windowSet.add(nums[right]);
    currentSum += nums[right];

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
      windowSet.delete(nums[left]);
      currentSum -= nums[left];
      left++;
    }
  }

  return maxSum;
};
//Best Runtime:
var maximumSubarraySum = function (nums, k) {
  let distArr = Array(100001).fill(0);
  let i = 0;
  let sum = 0;
  let maxSum = 0;
  let numNotDistinct = 0;
  // check the first window
  for (i = 0; i < k; i++) {
    distArr[nums[i]]++;
    if (distArr[nums[i]] > 1) {
      numNotDistinct++;
    }
    sum += nums[i];
  }
  if (numNotDistinct == 0) {
    maxSum = sum;
  }
  // now slide the window to the end of the array
  for (i = k; i < nums.length; i++) {
    // first check outgoing.
    if (distArr[nums[i - k]] > 1) {
      numNotDistinct--;
    }
    distArr[nums[i - k]]--;
    sum -= nums[i - k];

    //now check incoming
    distArr[nums[i]]++;
    if (distArr[nums[i]] > 1) {
      numNotDistinct++;
    }
    sum += nums[i];
    if (numNotDistinct == 0 && sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

//Best Memory:
var maximumSubarraySum = function (nums, k) {
  let max = 0,
    cnt = 0,
    sum = 0;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum += num;
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
      if (map[num] == 2) cnt++;
    }

    if (i + 1 < k) continue;

    if (cnt == 0) {
      max = Math.max(max, sum);
    }

    const n = nums[i - k + 1];
    sum -= n;

    map[n]--;
    if (map[n] == 1) {
      cnt--;
    }
  }

  return max;
};
