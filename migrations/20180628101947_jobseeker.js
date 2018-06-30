exports.up = (knex, Promise) => {
  return knex.schema.createTable('jobseeker', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('firstName')
    table.string('secondName')
    table.string('location')
    table.string('preferredPronouns')
    table.string('email')
    table.string('workplaceValues')
    table.string('personalIntro')
    table.string('valuesApplied')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('jobseeker')
}