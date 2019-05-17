require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { port, dbURI } = require('./config/environment')


const app = express()

mongoose.connect(dbURI)

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use('/api', routes)
app.use(errorHandler)

app.listen(port, () => console.log(`Up and running on port ${port}`))
