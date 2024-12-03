//119. Pascal's Triangle II
//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
    row.push(1);
  }

  return row;
};

//Best runtime:
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  const row = new Array(rowIndex + 1);
  for (let i = 0; i <= rowIndex; i++) {
    row[i] = nCr(rowIndex, i);
  }
  return row;
};

function nCr(n, r) {
  if (r === 0 || n === r) return 1;
  if (r > n / 2) r = n - r;
  let res = 1;
  for (let i = 1; i <= n - r; i++) {
    res *= (n - i + 1) / i;
  }
  return Math.round(res);
}

//Best memory:
var getRow = function (rowIndex) {
  let triangle = [[1]];
  if (rowIndex === 0) return triangle[0];
  for (let i = 1; i <= rowIndex; i++) {
    let newRow = [1];
    let prevRow = triangle[i - 1];
    for (let k = 0; k < prevRow.length - 1; k++) {
      newRow.push(prevRow[k] + prevRow[k + 1]);
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle[rowIndex];
};
