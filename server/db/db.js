const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  // getValues,
  getValue,
  // addValue,
  // editValue,
  // deleteValue
}

function getValue (id, testDb) {
  const db = testDb || knex
  return db('values')
    .where('id', id)
    .select()
    .first()
}

// function getValues (testDb) {
//   const db = testDb || knex
//   return db('values')
//     .insert({value: value})
// }

// function addValue (name, testDb) {
//   const db = testDb || knex
//   return db('values')
//     .insert({values: values})
// }

// function editSushi (sushi) {
//   const db = knex
//   return db('sushi')
//     .where('id', sushi.id).update(sushi)
// }

// function deleteSushi (id) {
//   const db = knex
//   return db('sushi')
//     .where('id', id).del()
// }
