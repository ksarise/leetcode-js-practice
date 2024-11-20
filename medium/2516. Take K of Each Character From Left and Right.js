//2516. Take K of Each Character From Left and Right
//You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k.
//Each minute, you may take either the leftmost character of s, or the rightmost character of s.
//Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  if (k === 0) return 0;
  let total = { a: 0, b: 0, c: 0 };
  for (let char of s) {
    total[char]++;
  }
  if (total.a < k || total.b < k || total.c < k) {
    return -1;
  }
  let n = s.length;
  let required = { a: total.a - k, b: total.b - k, c: total.c - k };
  let left = 0,
    maxLength = 0;
  let current = { a: 0, b: 0, c: 0 };

  for (let right = 0; right < n; right++) {
    current[s[right]]++;

    while (
      current.a > required.a ||
      current.b > required.b ||
      current.c > required.c
    ) {
      current[s[left]]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return n - maxLength;
};

//Best Runtime:
function takeCharacters(s, k) {
  const getIndex = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
  const count = [0, 0, 0];

  // Count the occurrences of each character
  for (const c of s) {
    count[getIndex(c)]++;
  }

  // If any character count is less than k, return -1
  if (count.some((v) => v < k)) {
    return -1;
  }

  const n = s.length;
  let maxLength = 0;

  // Sliding window
  for (let i = 0, j = 0; j < n; j++) {
    count[getIndex(s[j])]--;

    while (count[getIndex(s[j])] < k) {
      count[getIndex(s[i])]++;
      i++;
    }

    maxLength = Math.max(maxLength, j - i + 1);
  }

  return n - maxLength;
}

//Best Memory:
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  let countMap = { a: 0, b: 0, c: 0 };
  for (let i = 0; i < s.length; i++) {
    countMap[s[i]] = (countMap[s[i]] || 0) + 1;
  }
  if (countMap["a"] < k || countMap["b"] < k || countMap["c"] < k) {
    return -1;
  }
  let target = {
    a: countMap["a"] - k,
    b: countMap["b"] - k,
    c: countMap["c"] - k,
  };

  let right = 0;
  let left = 0;
  let maxWindow = 0;
  let windowCount = { a: 0, b: 0, c: 0 };

  while (right < s.length) {
    windowCount[s[right]]++;
    while (
      windowCount["a"] > target["a"] ||
      windowCount["b"] > target["b"] ||
      windowCount["c"] > target["c"]
    ) {
      windowCount[s[left]]--;
      left++;
    }
    maxWindow = Math.max(maxWindow, right - left + 1);
    right++;
  }

  return s.length - maxWindow;
};
