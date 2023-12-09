/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// Function to count the number of vowels in a given string
function countVowels(str) {
    // Convert the input string to lowercase
    const string = str.toLowerCase();
  
    // Count the number of vowels in the string and Return the count of vowels found
    return (string.match(/[aeiou]/g) || []).length;
  
}

module.exports = countVowels;