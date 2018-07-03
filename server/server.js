const express = require('express')
const path = require('path')
const login = require('./routes/login')
// const employer = require('./routes/employer')
// const jobseeker = require('./routes/jobseeker')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/login', login)
// server.use('/api/v1/', employer)
// server.use('/api/v1/', jobseeker)

module.exports = server
