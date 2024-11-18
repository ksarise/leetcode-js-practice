//383. Ransom Note
//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//Each letter in magazine can only be used once in ransomNote.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let charCount = {};
  for (let char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of ransomNote) {
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};

//Best Runtime:
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let pool = countLetters(magazine);
  let ransomLetters = countLetters(ransomNote);
  for (var i = 0; i < ransomLetters.length; i++) {
    if (ransomLetters[i] > pool[i]) return false;
  }
  return true;
};

function countLetters(inp) {
  let ret = new Array(26).fill(0);
  for (var i = 0; i < inp.length; i++) {
    ret[inp.charCodeAt(i) - 97]++;
  }
  return ret;
}

//Best Memory:
const getCountsMap = (s) => {
  const counts = new Map();
  for (let ch of s) {
    const currentCount = counts.get(ch) || 0;
    counts.set(ch, currentCount + 1);
  }

  return counts;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomCounts = getCountsMap(ransomNote);
  const magazineCounts = getCountsMap(magazine);

  for (let key of ransomCounts.keys()) {
    const ransomCount = ransomCounts.get(key);
    const magazineCount = magazineCounts.get(key) || 0;

    if (magazineCount < ransomCount) {
      return false;
    }
  }

  return true;
};
