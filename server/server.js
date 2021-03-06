const path = require('path')
const express = require('express')

const server = express()

const api = require('./routes/api')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/', api)

module.exports = server
