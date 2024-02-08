require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const errorHandler = require('./middlewares/error')

const connectDB = require('./config/db') 
connectDB()

app.use(express.json({limit: '1mb'}))
app.use(cors())
app.use(errorHandler)


const indexRoute = require('./routes')
app.use('/api', indexRoute)

module.exports = app