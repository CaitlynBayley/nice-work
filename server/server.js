const express = require('express')
const path = require('path')
const login = require('./routes/login')

const server = express()

server.use(express.static(path.join(__dirname, './public')))

// server.use('/', login)

module.exports = server

// const express = require('express')
const router = express.Router()

const db = require('./db/db')

router.get('/login', (req, res) => {
  db.userInfo()
    .then(value => {
      res.json(value)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

server.use('/', router)
