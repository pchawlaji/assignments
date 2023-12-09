/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// This function finds the largest element in an array of numbers.
function findLargestElement(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        // Return undefined if the array is empty
        return undefined;
    }
    
    // Use the spread operator (...) to pass each element of the array as arguments to Math.max()
    // Math.max() returns the largest element in the array
    // Return the largest element
    return Math.max(...numbers);
}

module.exports = findLargestElement;