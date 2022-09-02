require('dotenv').config()
const Client = require('../model/client')
const mongoose = require('mongoose')

const url = process.env.DATABASE_URL

mongoose.connect(url)

const connect = mongoose.connection

connect.once('conexion', () => {
  console.log('Connection Succest')
})

async function createClients (req, res) {
  const newClient = new Client()
  const parameters = req.body

  newClient.ticketID = parameters.ticketID
  newClient.name = parameters.name
  newClient.lastname = parameters.lastname
  newClient.cardId = parameters.cardId
  newClient.email = parameters.email
  newClient.description = {
    brand: parameters.description.brand,
    model: parameters.description.model,
    rin: parameters.description.rin,
    color: parameters.description.color
  }

  try {
    const clientsDB = await newClient.save()
    if (!clientsDB) {
      res.status(400).json({ msg: "There's an error" })
    } else {
      res.status(200).json(clientsDB)
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ClientsByEmail (req, res) {
  try {
    const client = await Client.find().sort({ email: 'asc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ClientsByTicket (req, res) {
  try {
    const client = await Client.find().sort({ ticketID: 'asc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ClientsByDateReception (req, res) {
  try {
    const client = await Client.find().sort({ dateRepception: 'asc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ClientsByStatus (req, res) {
  try {
    const client = await Client.find().sort({ currentStatus: 'asc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function updateClient (req, res) {
  const idClient = req.body._id

  try {
    const updateClient = await Client.findByIdAndUpdate(idClient, req.body)

    if (!updateClient) {
      res.status(400).json({ msg: 'Error at the update moment' })
    } else {
      res.status(200).json({ client: updateClient })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function deleteClient (req, res) {
  const ClientID = req.body._id

  const deleteClient = await Client.findByIdAndDelete(ClientID)

  try {
    if (!deleteClient) {
      res.status(400).json({ msg: 'Error at delete moment' })
    } else {
      res.status(200).json({ msg: 'Client Deleted' })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

module.exports = {
  createClients,
  ClientsByEmail,
  ClientsByTicket,
  ClientsByDateReception,
  ClientsByStatus,
  updateClient,
  deleteClient
}
