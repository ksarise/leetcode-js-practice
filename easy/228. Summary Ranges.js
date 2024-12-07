//228. Summary Ranges
//You are given a sorted unique integer array nums.
//A range [a,b] is the set of all integers from a to b (inclusive).
//Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
//That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
//Each range [a,b] in the list should be output as:
//"a->b" if a != b
//"a" if a == b

///////////////////////////////////////////////////////////////////////////////

//My Solution:
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = 0;
  let range = [];
  for (let i = 1; i <= nums.length; i += 1) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === i - 1) {
        range.push(nums[start].toString());
      } else {
        range.push(nums[start] + "->" + nums[i - 1]);
      }
      start = i;
    }
  }
  return range;
};

//Best Memory:
var summaryRanges = function (nums) {
  let temp = "";
  const result = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (temp.length == 0) temp += nums[i];
    count++;

    if (nums[i] + 1 != nums[i + 1]) {
      if (count > 1) {
        temp += "->" + nums[i];
      }
      result.push(temp);
      temp = "";
      count = 0;
    }
  }

  return result;
};
