const fs = require('fs');

function logFile(err, data) {
    if (err) {
        console.log("An error occured while reading the file: " + e)
    }
    else { console.log(data) }
}

fs.readFile("./a.text", "utf-8", logFile)