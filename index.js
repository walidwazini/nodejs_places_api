const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminData = require('./routes/admin')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080;

app.use('/admin', adminData.routes)

app.listen(port)

console.log(`Places API server running at ${port}`)
