const express = require('express')
const Client = require('../controllers/controllerClient')

const api = express.Router()

api.post('/', Client.createClients)
api.get('/', Client.ClientsByEmail)
api.get('/tickets', Client.ClientsByTicket)
api.get('/date-reception', Client.ClientsByDateReception)
api.get('/status', Client.ClientsByStatus)

module.exports = api
