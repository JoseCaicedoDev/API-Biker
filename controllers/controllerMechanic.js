require('dotenv').config()
const Mechanic = require('../model/mechanic')

async function createMechanic (req, res) {
  const newMechanic = new Mechanic()
  const parameters = req.body

  newMechanic.idMechanic = parameters.idMechanic
  newMechanic.name = parameters.name
  newMechanic.lastName = parameters.lastName
  newMechanic.password = parameters.password

  try {
    const MechanicDB = await newMechanic.save()
    if (!MechanicDB) {
      res.status(400).json({ msg: "There's an error" })
    } else {
      res.status(200).json(MechanicDB)
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function MechanicList (req, res) {
  try {
    const mechanic = await Mechanic.find().sort({ _id: 'asc' })

    res.status(200).send(mechanic)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function updateMechanics (req, res) {
  const idMechanic = req.body._id

  try {
    const updateMechanic = await Mechanic.findByIdAndUpdate(idMechanic, req.body)

    if (!updateMechanic) {
      res.status(400).json({ msg: 'Error at the update moment' })
    } else {
      res.status(200).json({ mechanic: updateMechanic })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

async function deleteMechanic (req, res) {
  const idMechanic = req.body._id

  const deleteMechanic = await Mechanic.findByIdAndDelete(idMechanic)

  try {
    if (!deleteMechanic) {
      res.status(400).json({ msg: 'Error at delete moment' })
    } else {
      res.status(200).json({ msg: 'Mechanic Deleted' })
    }
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

module.exports = {
  createMechanic,
  MechanicList,
  updateMechanics,
  deleteMechanic
}
