//3. Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < n; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

//Best Runtime:
function lengthOfLongestSubstring(s) {
  let max = 0;
  const arr = new Int16Array(95).fill(-1);
  for (let l = 0, r = 0; r < s.length; r++) {
    const code = s.charCodeAt(r) - 32;
    l = Math.max(arr[code] + 1, l);
    arr[code] = r;
    max = Math.max(r - l + 1, max);
  }
  return max;
}

//Best Memory:
var lengthOfLongestSubstring = function (s) {
  if (s == "") return 0;

  let start = 0,
    end = 0;
  let letters = new Map();

  let maxLen = 1;

  letters.set(s[0], 1);
  while (end != s.length - 1) {
    end += 1;
    const c = s[end];

    while (letters.get(c)) {
      letters.set(s[start], 0);
      start += 1;
    }

    letters.set(c, 1);

    let len = end - start + 1;
    if (len > maxLen) {
      maxLen = len;
    }
  }

  return maxLen;
};
