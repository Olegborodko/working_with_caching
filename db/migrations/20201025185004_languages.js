exports.up = function(knex) {
  return knex.schema.createTable('languages', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique('id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('languages')
};

