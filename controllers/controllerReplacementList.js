require('dotenv').config()
const ReplacementList = require('../model/replacementList')

async function createReplacementList (req, res) {
  const newReplacementList = new ReplacementList()
  const parameters = req.body

  newReplacementList.idSupplier = parameters.idSupplier
  newReplacementList.nameSupplier = parameters.nameSupplier
  newReplacementList.phoneNumber = parameters.phoneNumber
  newReplacementList.address = parameters.address
  newReplacementList.part = parameters.part
  newReplacementList.price = parameters.price
  newReplacementList.type = parameters.type
  newReplacementList.brand = parameters.brand
  newReplacementList.model = parameters.model
  newReplacementList.amount = parameters.amount

  try {
    const ReplacementListDB = await newReplacementList.save()
    if (!ReplacementListDB) {
      res.status(400).json({ msg: "There's an error" })
    } else {
      res.status(200).json(ReplacementListDB)
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ProductsByMark (req, res) {
  try {
    const client = await ReplacementList.find().sort({ brand: 'asc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ProductsByPrice (req, res) {
  try {
    const client = await ReplacementList.find().sort({ price: 'asc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function ProductsByAmount (req, res) {
  try {
    const client = await ReplacementList.find().sort({ amount: 'desc' })

    res.status(200).send(client)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function updateProducts (req, res) {
  const idProduct = req.body._id

  try {
    const updateProduct = await ReplacementList.findByIdAndUpdate(idProduct, req.body)

    if (!updateProduct) {
      res.status(400).json({ msg: 'Error at the update moment' })
    } else {
      res.status(200).json({ client: updateProduct })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
module.exports = {
  createReplacementList,
  ProductsByMark,
  ProductsByPrice,
  ProductsByAmount,
  updateProducts
}
