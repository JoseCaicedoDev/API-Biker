const express = require('express')
const Client = require('../controllers/controllerClient')

const api = express.Router()

api.get('/', Client.helloWorld)

module.exports = api
