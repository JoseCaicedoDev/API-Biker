const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mechanicSchema = new Schema({
  idMechanic: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Mechanic', mechanicSchema)
