exports.up = function(knex) {
  return knex.schema.createTable('actors_films', (table) => {
    table.increments('id').primary()
    table.integer('actor_id')
      .notNullable()
      .unsigned()
      .references('actors.id')
    table.integer('film_id')
      .notNullable()
      .unsigned()
      .references('films.id')  
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique('id')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('actors_films')
};
