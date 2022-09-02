const express = require('express')
const ClientRoutes = require('./routes/routes')

const app = express()

// MIDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app

app.use('/api', ClientRoutes)
