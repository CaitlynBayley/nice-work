exports.up = (knex, Promise) => {
  return knex.schema.createTable('values', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('value1')
    table.string('value2')
    table.string('value3')
    table.string('value4')
    table.string('value5')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('values')
}
