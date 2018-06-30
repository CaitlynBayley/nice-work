exports.up = (knex, Promise) => {
  return knex.schema.createTable('employer', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('firstName')
    table.string('secondName')
    table.string('companyName')
    table.string('location')
    table.string('contactPerson')
    table.string('preferredPronouns')
    table.string('email')
    table.string('jobTitle')
    table.string('jobDescription')
    table.string('jobValuesApplied')
    table.string('jobHours')
    table.string('jobSalary')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('employer')
}