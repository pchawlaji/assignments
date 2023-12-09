/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// This function calculates the total amount spent in each category based on a list of transactions.
function calculateTotalSpentByCategory(transactions) {
  // Create an empty object to store the total spent in each category.
  const outputObj = {};

  // Iterate over each transaction in the list.
  for (const { price, category } of transactions) {
    // Add the price of the current transaction to the total spent in its category.
    // If the category does not exist in the output object, initialize it with 0.
    outputObj[category] = (outputObj[category] || 0) + price;
  }

  // Convert the output object into an array of objects, where each object represents a category
  // and its corresponding total spent.
  return Object.entries(outputObj).map(([category, totalSpent]) => ({ category, totalSpent }));
}

module.exports = calculateTotalSpentByCategory;
