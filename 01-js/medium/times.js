/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// This function calculates the time taken to sum all numbers from 1 to n.
function calculateTime(n) {
    // Get the start time in milliseconds using Date.now()
    const startTime = Date.now();

    // Initialize the sum variable
    let sum = 0;

    // Loop through all numbers from 1 to n and add them to the sum
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Get the end time in milliseconds using Date.now()
    const endTime = Date.now();

    // Calculate the total time taken by subtracting the start time from the end time,
    // and divide by 1000 to convert milliseconds to seconds
    const totalTime = (endTime - startTime) / 1000;

    // Return the total time taken
    return totalTime;
}

console.log(calculateTime(100))
console.log(calculateTime(100000))
console.log(calculateTime(1000000000))