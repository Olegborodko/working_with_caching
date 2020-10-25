const { knex } = require('../knexfile')

async function drop(table){
  await knex.raw(`DROP TABLE IF EXISTS ${table};`)
}

async function truncate(){
  await drop('actors_films')
  await drop('films')
  await drop('languages')
  await drop('actors')
  await drop('migrations')
  await drop('migrations_lock')
  await knex.migrate.latest()
  await knex.seed.run()
  await knex.destroy()
  console.log('done')
}

truncate()
