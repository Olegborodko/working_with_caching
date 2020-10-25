exports.up = function(knex) {
  return knex.schema.createTable('actors', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.text('address').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique('id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('actors')
};
