require("dotenv").config()
const Client = require('../model/client')
const mongoose = require('mongoose')



async function Clients (req, res) {
  try {
    const client = await Client.find()

    res.status(200).send(client)

  }catch (err){
    res.status(500).json({msg: err.message})
  }
}

module.exports = {
  Clients
}

