const express = require('express')
let app = express()

function run() {
    app.get('/', function (req, res) {
        console.log("someone connected")
        res.send('Hello World')
    })

    app.get('/hello/', function (req, res) {
        res.send('Hello tapir')
    })

    app.listen(8000)
}

exports.run = run