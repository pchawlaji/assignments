/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    return new Promise((resolve, reject) => {
        const endTime = new Date().getTime() + milliseconds
        while (new Date().getTime() <= endTime) {
            console.log("I am Sleeping..Cant take new work")
        }
        resolve();
    })
}

console.log("Start Sleeping")
sleep(1)
    .then(() => {
        console.log("I am awake Now")
    })

module.exports = sleep;
