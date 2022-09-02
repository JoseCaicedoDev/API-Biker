const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ClientSchema = new Schema({
  ticketID: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  cardId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  currentStatus: {
    type: Number,
    required: true,
    default: 1
  },
  description: {
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    rin: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  dateReception: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateDelivery: {
    type: Date,
    required: true,
    default: Date.now
  },
  warranty: {
    type: Number,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Client', ClientSchema)
