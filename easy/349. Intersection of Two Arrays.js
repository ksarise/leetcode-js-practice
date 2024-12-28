//349. Intersection of Two Arrays
//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((num) => set2.has(num));
};

//Best Runtime:
var intersection = function (nums1, nums2) {
  // ================ Soultion 1 ================
  // Using a hash set
  const set = new Set(nums1);
  const intersection = [];
  for (let num of nums2) {
    if (set.has(num)) intersection.push(num);
    set.delete(num);
  }
  return intersection;
};

//Best Memory:
var intersection = function (nums1, nums2) {
  let newArr = [];
  for (let i = 0; i <= nums1.length - 1; i++) {
    for (let j = 0; j <= nums2.length - 1; j++) {
      if (nums1[i] == nums2[j] && !newArr.includes(nums1[i])) {
        newArr.push(nums1[i]);
      }
    }
  }
  return newArr;
};
