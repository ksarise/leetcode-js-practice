//118. Pascal's Triangle
//Given an integer numRows, return the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle.push(row);
  }

  return triangle;
};

//Best memory:
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let res = new Array(numRows);
  res[0] = [1];
  res[1] = [1, 1];

  let n = numRows - 2;

  for (let i = 2; i < numRows; i++) {
    let arr = new Array(i + 1);

    arr[0] = res[i - 1][0];
    arr[i] = res[i - 1][i - 1];

    for (let j = 1; j < i; j++) {
      arr[j] = res[i - 1][j - 1] + res[i - 1][j];
    }

    res[i] = arr;
  }

  return res;
};
