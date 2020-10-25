exports.up = function(knex) {
  return knex.schema.createTable('films', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.text('description')
    table.integer('release_year').notNullable()
    table.integer('language_id')
      .notNullable()
      .unsigned()
      .references('languages.id')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique('id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('films')
};

