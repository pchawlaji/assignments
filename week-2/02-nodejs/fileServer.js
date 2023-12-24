/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) => {
  const folderPath = "./files"
  fs.readdir(folderPath, (err, titles) => {
    if (err) {
      res.status(500).json({ error: 'Error reading contents of the folder' })
    }
    else {
      res.status(200).json({ titles })
    }
  })

})

app.get("/files/:filename", (req, res) => {

  const filename = req.params.filename

  const filePath = path.resolve(`./files/${filename}`)

  fs.readFile(filePath, (err, filedata) => {
    if (err) {
      console.log(err)
      res.status(404).json({ error: 'not found' })
    } else {
      console.log(filedata)

      res.status(201).json({ filedata })
    }
  })
})

app.listen(3000, () => { console.log("app is now listing on port 3000") })


module.exports = app;