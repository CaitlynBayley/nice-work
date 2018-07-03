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

router.get('/register', (req, res) => {
  const id = req.params.id
  db.getSushi(id)
    .then(sush => {
      res.json(sush)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.post('/', (req, res) => {
  const sushi = req.body
  db.newSushi(sushi)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.put('/', (req, res) => {
  const sushi = req.body
  db.editSushi(sushi)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteSushi(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
