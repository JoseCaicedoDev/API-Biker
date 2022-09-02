const express = require('express')
const Client = require('../controllers/controllerClient')

const api = express.Router()

api.post('/', Client.createClients)
api.get('/', Client.ClientsByDateReception)
api.get('/email', Client.ClientsByEmail)
api.get('/tickets', Client.ClientsByTicket)
api.get('/status', Client.ClientsByStatus)
api.put('/', Client.updateClient)
api.delete('/', Client.deleteClient)

module.exports = api
