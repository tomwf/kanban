const mongoose = require('mongoose')

require('dotenv').config()

async function connectDB() {

  try {
    await mongoose.connect(process.env.MONGO_URI)
  } catch(err) {
    console.error(err)
  }

}

module.exports = connectDB
