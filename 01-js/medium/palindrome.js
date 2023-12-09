/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

/**
 * This function checks if a given string is a palindrome.
 * @param {string} str - The input string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters and spaces
  const cleanStr = str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, '');

  // Get the length of the cleaned string
  const length = cleanStr.length;

  // Iterate over the first half of the string
  for (let i = 0; i < length / 2; i++) {
    // Compare the characters from the beginning and end of the string
    if (cleanStr[i] !== cleanStr[length - 1 - i]) {
      // If the characters are not equal, the string is not a palindrome
      return false;
    }
  }

  // All characters matched, so the string is a palindrome
  return true;
}

module.exports = isPalindrome;
