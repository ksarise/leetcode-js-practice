//136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 13ms
// Beats 35.47%
// Memory 52.71MB
// Beats 30.46%
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let temp = {};
  nums.forEach((num, i) => {
    if (temp[num]) {
      delete temp[num];
    } else {
      temp[num] = true;
    }
  });
  return Number(Object.keys(temp)[0]);
};

//Best Runtime:
//Runtime: 3ms

/**
 * @param {number[]} nums
 * @return {number}
 */
singleNumber = function (nums) {
  let single = 0;
  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
  }
  return single;
};

//Best Memory:
//Memory: 46.565mb
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    r = r ^ nums[i];
  }
  return r;
};
