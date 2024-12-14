//171. Excel Sheet Column Number
//Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// Z -> 26
// AA -> 27
// AB -> 28

////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let value = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result = result * 26 + value;
  }
  return result;
};

//Best runtime:
var titleToNumber = function (columnTitle) {
  let output = 0;
  let l = columnTitle.length - 1;
  for (let i = 0; i <= l; i++) {
    output += (columnTitle.charCodeAt(i) - 64) * 26 ** (l - i);
  }
  return output;
};

//Best memory OMG:
var titleToNumber = function (columnTitle) {
  const nums = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let value = nums[columnTitle[i]];

    result = result * 26 + value;
  }

  return result;
};
