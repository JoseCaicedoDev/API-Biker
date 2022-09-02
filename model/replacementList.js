const mongoose = require('mongoose')

const Schema = mongoose.Schema

const replacementList = new Schema({
  idSupplier: {
    type: String,
    required: true
  },
  nameSupplier: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  part: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true,
    default: '/img/default/:u'
  },
  type: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('List', replacementList)
