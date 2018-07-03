exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('firstName')
    table.string('secondName')
    table.string('companyName')
    table.string('location')
    table.string('contactPerson')
    table.string('preferredPronouns')
    table.string('email')
    table.string('introduction')    
    table.string('value1')
    table.string('value2')
    table.string('value3')
    table.string('value4')
    table.string('value5')
    table.string('jobTitle')
    table.string('valuesApplied')
    table.string('hours')
    table.string('rate')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user')
}
