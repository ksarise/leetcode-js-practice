//1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
//Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
//Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word.
//If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
//A prefix of a string s is any leading contiguous substring of s.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return -1;
};

//Best memory:
var isPrefixOfWord = function (sentence, searchWord) {
  sentence = sentence.split(" ");
  let i = 0; // pointer to each word in sentence

  while (i < sentence.length) {
    let j = 0; // pointer to every letter in a word
    let k = 0; // pointer to every letter in searchWord

    while (sentence[i].length >= searchWord.length && k < searchWord.length) {
      if (sentence[i][j] !== searchWord[k]) {
        break;
      } else {
        if (j + 1 === searchWord.length) return i + 1;
      }
      j++;
      k++;
    }

    i++;
  }

  return -1;
};
