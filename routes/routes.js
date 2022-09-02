const express = require('express')
const Client = require('../controllers/controllerClient')
const ReplacementList = require('../controllers/controllerReplacementList')
const Mechanic = require('../controllers/controllerMechanic')

const api = express.Router()

api.post('/', Client.createClients)
api.get('/', Client.ClientsByDateReception)
api.get('/email', Client.ClientsByEmail)
api.get('/tickets', Client.ClientsByTicket)
api.get('/status', Client.ClientsByStatus)
api.put('/', Client.updateClient)
api.delete('/', Client.deleteClient)

api.post('/create-list', ReplacementList.createReplacementList)
api.get('/list', ReplacementList.ProductsByMark)
api.get('/list-price', ReplacementList.ProductsByPrice)
api.get('/list-amount', ReplacementList.ProductsByAmount)
api.put('/list-update', ReplacementList.updateProducts)
api.delete('/list-delete', ReplacementList.deleteProducts)

api.post('/create-mechanic', Mechanic.createMechanic)
api.get('/mechanic', Mechanic.MechanicList)
api.put('/mechanic', Mechanic.updateMechanics )
api.delete('/mechanic', Mechanic.deleteMechanic)

module.exports = api
