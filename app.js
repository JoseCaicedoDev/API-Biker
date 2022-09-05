const express = require('express')
const cors = require('cors')
const ClientRoutes = require('./routes/routes')

const app = express()
app.use(cors())

// MIDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app

app.use('/api', ClientRoutes)
