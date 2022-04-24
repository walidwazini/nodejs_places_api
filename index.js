const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080;
const router = express.Router()