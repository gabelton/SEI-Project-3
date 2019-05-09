const express = require('express')
const bodyParser = require('body-parser') // this comes with express
const mongoose = require('mongoose')
const { port, dbURI } = require('./config/environment')

const app = express()

mongoose.connect(dbURI)

app.use(bodyParser.json())



app.listen(port, () => console.log(`Up and running on port ${port}`))
