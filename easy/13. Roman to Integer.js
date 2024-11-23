//13. Roman to Integer
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Given a roman numeral, convert it to an integer.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanMap[s[i]];
    let next = romanMap[s[i + 1]];
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

//Best runtime:
var romanToInt = function (s) {
  //separar cada letra em uma variavel.
  //Se for I, X ou C, checar o próxmo antes de adicionar um numero.
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] == "V" || s[i + 1] == "X") {
          sum--;
          break;
        }
        sum++;
        break;

      case "V":
        sum += 5;
        break;
      case "X":
        if (s[i + 1] == "L" || s[i + 1] == "C") {
          sum -= 10;
          break;
        }
        sum += 10;
        break;
      case "L":
        sum += 50;
        break;
      case "C":
        if (s[i + 1] == "D" || s[i + 1] == "M") {
          sum -= 100;
          break;
        }
        sum += 100;
        break;
      case "D":
        sum += 500;
        break;
      case "M":
        sum += 1000;
        break;
    }
  }
  return sum;
};

//Best memory:
var romanToInt = function (s) {
  let romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    const current = romanMap[s[i]]; // 1
    const next = romanMap[s[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
};
