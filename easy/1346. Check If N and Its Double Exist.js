//1346. Check If N and Its Double Exist
//Given an array arr of integers, check if there exist two indices i and j such that :
//i != j
//0 <= i, j < arr.length
//arr[i] == 2 * arr[j]

/////////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let seen = new Set();

  for (let num of arr) {
    if (seen.has(2 * num) || (num % 2 === 0 && seen.has(num / 2))) {
      return true;
    }
    seen.add(num);
  }

  return false;
};

//Best Runtime:
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] * 2 || arr[j] === arr[i] * 2) {
        return true;
      }
    }
  }
  return false;
};

//Best Memory:
var checkIfExist = function (arr) {
  let k = arr.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (i == j) {
        continue;
      }
      if (arr[i] == arr[j] * 2) {
        return true;
      }
    }
  }
  return false;
};
