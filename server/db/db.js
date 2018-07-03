const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  userInfo
}

function userInfo (testDb) {
  const db = testDb || knex
  return db('users')
    .select()
}
