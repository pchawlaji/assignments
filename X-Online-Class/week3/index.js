const express = require('express')
const zod = require('zod')
const app = express()
const port = 3000

const schema = zod.array(zod.number());


//Middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/health-checkup', function (req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    res.send({ response })
    // const kidneyLength = kidneys.length

    // res.send("you have " + kidneyLength + " kidneys")
});

//Global cache
// app.use(function (err, req, res, next) {
//     res.json({
//         msg: "Sorry something went wrong"
//     })
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})