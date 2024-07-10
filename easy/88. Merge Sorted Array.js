//88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
//  representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
//  To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
//   and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 47ms
// Beats 87.08%
// Memory 48.89MB
// Beats 67.58%
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2.shift();
  }
  nums1.sort((a, b) => a - b);
};
//Best Runtime:
//Runtime: 26ms
var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2.shift();
  }

  return nums1.sort((a, b) => a - b);
};
//Best Memory:
//Memory: 44.3mb
var merge = function (nums1, m, nums2, n) {
  let a;
  let b;
  let c = m,
    d = n;
  m = m - 1;
  n = n - 1;
  for (let i = c + d - 1; i >= 0; i--) {
    a = m >= 0 ? nums1[m] : -100;
    b = n >= 0 ? nums2[n] : -100;
    if (a > b) {
      nums1[i] = a;
      m--;
    } else {
      nums1[i] = b;
      n--;
    }
  }
};
