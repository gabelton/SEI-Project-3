const express = require('express')
const bodyParser = require('body-parser') // this comes with express
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000

const app = express()


app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))
