//168. Excel Sheet Column Title
//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

////////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber -= 1;
    let char = String.fromCharCode((columnNumber % 26) + 65);
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};

//Best solution:
var convertToTitle = function (columnNumber) {
  let ans = "";
  while (columnNumber !== 0) {
    let rem = (columnNumber - 1) % 26;
    columnNumber = Math.trunc((columnNumber - 1) / 26);
    ans = String.fromCharCode("A".charCodeAt(0) + rem) + ans;
  }

  return ans;
};
