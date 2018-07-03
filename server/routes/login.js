const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/login', (req, res) => {
  db.getValues()
    .then(values => {
      res.json(values)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})
