//2109. Adding Spaces to a String
//You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added.
//Each space should be inserted before the character at the given index.
//For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively.
//Thus, we obtain "Enjoy Your Coffee".
//Return the modified string after the spaces have been added.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  //First solution, but too slow:
  // return s.split('').reduce((result, char, index) => {
  //     if (spaces.includes(index)) result += " ";
  //     return result + char;

  // }, "")
  let result = [];
  let prevIndex = 0;

  for (let i = 0; i < spaces.length; i += 1) {
    result.push(s.slice(prevIndex, spaces[i]));
    result.push(" ");
    prevIndex = spaces[i];
  }
  result.push(s.slice(prevIndex));
  return result.join("");
};

//Best Runtime:
function addSpaces(s, spaces) {
  const N = spaces.length;
  const splits = new Array(N + 1);

  splits[0] = s.substring(0, spaces[0]);
  for (let i = 1; i < N; ++i) {
    splits[i] = s.substring(spaces[i - 1], spaces[i]);
  }
  splits[N] = s.substring(spaces[N - 1]);

  return splits.join(" ");
}

//Best Memory:
var addSpaces = function (s, spaces) {
  let o = new Uint8Array(s.length + spaces.length),
    i,
    j;
  for (i = j = 0; i < s.length; i++) {
    if (i === spaces[j]) o[i + j++] = 32;
    o[i + j] = s.charCodeAt(i);
  }
  return new TextDecoder().decode(o);
};
