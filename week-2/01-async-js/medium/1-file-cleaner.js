const fs = require('fs');

//Reads a file and returns a promise
function readAFile(fileToRead) {
    return new Promise((resolve) => {
        //Use fs library to return a promise of data
        fs.readFile(fileToRead, "utf-8", (err, data) => {
            console.log(data)
            resolve(data)
        })
    })
}

//Writes to a file
function writeAFile(fileNameToBeWritten, data) {
    return new Promise((resolve) => {
        //Us fs library to return a promise that file is written else sends a reject if error occurs
        fs.writeFile(fileNameToBeWritten, data, (err) => {
            err ? reject(err) : resolve()
        })
    })
}

//Reads and cleans the data and Writes back to a file 
function readAndWriteFile(fileName) {
    //Read a file and pass on the data to write function once promise if fulfilled
    readAFile(fileName)
        .then((dataReceived) => {
            const updatedData = dataReceived.replace(/\s+/g, " ").trim()
            return writeAFile(fileName, updatedData)
        })
        // Once write promise if fulfilled then read the file again to log the file in console
        .then(() => {
            console.log("Successfull")
            readAFile(fileName) //If you dont want to log the contents of the file back in console, then remove this
        })
        .catch((error) => {
            console.error('An Error Occured: ', error)
        })
}

readAndWriteFile("b.txt")

console.log("Hi from outside");
