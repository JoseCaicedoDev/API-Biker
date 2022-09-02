const Client = require('../model/client')
const dotenv = require('dotenv')
const { restart } = require('nodemon')

dotenv.config()

const client = Client.find


async function Client (req, res) {
  try {
    const client = await Client.find()

    restart.status(200).send({client})

  }catch (err){
    res.status(500).send(err)
  }
}

module.exports = {
  Client
}

