// const Client = require('../model/client')

async function helloWorld (req, res) {
  return res.status(200).send({ msg: 'helloWord' })
}

module.exports = {
  helloWorld
}
