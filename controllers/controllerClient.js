const Client = require('../model/client')
const dotenv = require('dotenv')

dotenv.config()

async function Clientt (req, res) {
  try {
    const client = await Client.find()

    restart.status(200).send(client)

  }catch (err){
    res.status(500).send(err)
  }
}

module.exports = {
  Clientt
}

