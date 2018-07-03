exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('firstName')
    table.string('lastName')
    table.string('userType')
    table.string('location')
    table.string('preferredPronouns')
    table.string('email')
    table.string('introduction')
    table.string('value1')
    table.string('value2')
    table.string('value3')
    table.string('value4')
    table.string('value5')
    table.string('valuesApplied')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
