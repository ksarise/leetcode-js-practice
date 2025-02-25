//6. Zigzag Conversion
//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
//(you may want to display this pattern in a fixed font for better legibility)
//And then read line by line: "PAHNAPLSIIGYIR"
//Write the code that will take a string and make this conversion given a number of rows: string convert(string s, int numRows);

///////////////////////////////////////////////////////////////////////////////

//My and only solution:
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const cycle = 2 * (numRows - 1);
  const rows = new Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    const posInCycle = i % cycle;
    const row = posInCycle < numRows ? posInCycle : cycle - posInCycle;
    rows[row] += s[i];
  }

  return rows.join("");
};
