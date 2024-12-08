//283. Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroIndex = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[zeroIndex] = nums[i];
      zeroIndex += 1;
    }
  }
  for (let j = zeroIndex; j < nums.length; j += 1) {
    nums[j] = 0;
  }
};

//Best Runtime:
var moveZeroes = function (nums) {
  let lp = 0;
  let hp = 1;
  let i = 0;

  if (nums.length == 1) return nums;
  while (true) {
    i++;
    if (nums[lp] == 0 && nums[hp] == 0) hp++;
    if (hp >= nums.length || lp >= nums.length - 1) break;

    if (nums[lp] == 0 && nums[hp] != 0) {
      nums[lp] = nums[hp];
      nums[hp] = 0;
      lp++;
      // hp++
    }

    if (nums[lp] != 0 && nums[hp] == 0) {
      lp++;
    }

    if (nums[lp] != 0 && nums[hp] != 0) {
      lp = hp;
      hp++;
    }
  }

  return nums;
};

//Best Memory:
var moveZeroes = function (nums) {
  if (nums.length == 1 || nums.length == 0) {
    return nums;
  }
  let p = 0;
  let count = 0;
  while (p < nums.length && count < nums.length) {
    count++;
    if (nums[p] == 0) {
      nums.splice(p, 1);
      nums.push(0);
    } else {
      p++;
    }
  }
  return nums;
};
