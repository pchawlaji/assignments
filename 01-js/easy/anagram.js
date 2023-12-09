/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// This function checks if two strings are anagrams of each other.
function isAnagram(str1, str2) {

  // Check if the lengths of the strings are different.
  if (str1.length !== str2.length) {
    // If the lengths are different, the strings cannot be anagrams.
    return false;
  }

  // Convert the strings to lowercase and remove any whitespace.
  let string1 = str1.toLowerCase().replace(/\s+/g, '');
  let string2 = str2.toLowerCase().replace(/\s+/g, '');

  // Iterate through each character in string1.
  for (let i = 0; i < string1.length; i++) {
    // Check if the current character in string1 is not present in string2.
    if (!string2.includes(string1[i])) {
      // If a character in string1 is not present in string2, the strings cannot be anagrams.
      return false;
    }
  }

  // If all characters in string1 are present in string2, the strings are anagrams.
  return true
}

module.exports = isAnagram;