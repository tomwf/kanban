const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const connectDB = require('./db')
const apiRoutes = require('./routes/apiRoutes')

require('dotenv').config()

const PORT = process.env.PORT || 5000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Allow server to receive body in JSON
app.use(bodyParser.json())

// Connect Database
connectDB()

// Routes
apiRoutes(app)

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Run server
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
