//1422. Maximum Score After Splitting a String
// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

///////////////////////////////////////////////////////////////////////////////

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let maxScore = 0;

  let totalOnes = 0;
  for (let char of s) {
    if (char === "1") totalOnes++;
  }

  let leftZeros = 0;
  let rightOnes = totalOnes;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      leftZeros++;
    } else {
      rightOnes--;
    }
    maxScore = Math.max(maxScore, leftZeros + rightOnes);
  }

  return maxScore;
};

//Best Runtime:
var maxScore = function (s) {
  const prefix = [];
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) total++;
    prefix[i] = total;
  }
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    // If i split here, find the score
    const zeroesCount = i + 1 - prefix[i];
    const onesCount = total - prefix[i];
    score = Math.max(zeroesCount + onesCount, score);
  }
  return score;
};

//Best Memory:
var maxScore = function (s) {
  let totalOnes = 0,
    zerosCount = 0,
    onesCount = 0,
    bestScore = -Infinity;

  // Count total number of ones
  for (const char of s) {
    if (char === "1") totalOnes++;
  }

  // Traverse the string and calculate scores
  for (let i = 0; i < s.length - 1; i++) {
    // Stop before the last character
    if (s[i] === "0") zerosCount++;
    else onesCount++;

    // Calculate score
    const currentScore = zerosCount + (totalOnes - onesCount);
    bestScore = Math.max(bestScore, currentScore);
  }

  return bestScore;
};
