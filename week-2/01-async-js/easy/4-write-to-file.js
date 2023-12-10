const fs = require('fs')

function logFile(err, data) {
    if (err) {
        console.log("An error occured while updating the file: " + e)
    }
    else {
        fs.readFile("./a.text", "utf-8", (err, data) => { console.log(data) })
    }
}

fs.writeFile("./a.text", "The file is now updated", logFile)