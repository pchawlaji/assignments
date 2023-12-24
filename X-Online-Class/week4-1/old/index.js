const express = require('express')
const app = express()
const port = 3001

app.get('/payment', (req, res) => {
    console.log("inside payment function")
    const principal = req.query.principal
    const rate = req.query.rate
    const time = req.query.time

    const payment = principal * rate * time / 1200
    res.status(200).json({ "payment": payment })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;