//12. Integer to Roman
//Given an integer, convert it to a Roman numeral.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      roman += syms[i];
      num -= val[i];
    }
  }
  return roman;
};

//Best Solution:
var intToRoman = function (num) {
  const M = ["", "M", "MM", "MMM"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] +
    I[num % 10]
  );
};
