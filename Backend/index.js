require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const connectToDataBase = require('./src/database')
const routes = require('./src/routes/routes')
port = process.env.PORT || 4000

connectToDataBase()
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.get('/', (req, res) => {
  res.status(200).json({ MSG: 'Bem vindo!' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
