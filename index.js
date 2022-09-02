/* Importing the app.js file. */
const dotenv = require('dotenv')
const app = require('./app')
const mongoose = require('mongoose')
dotenv.config()

const port = process.env.PORT || 4000
const url = process.env.DATABASE_URL

mongoose.connect(url, (err, res) => {
  try {
    if (err) {
      throw err
    } else {
      // CONEXION EXITOSA
      app.listen(port, () => {
        console.log('Server running at LocalHost ' + port)
      })
    }
  } catch (err) {
    console.log(err)
  }
})
