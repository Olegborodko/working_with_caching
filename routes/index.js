const express = require('express')
const router = express.Router()
const { knex } = require('../knexfile')

router.get('/films', async function(req, res, next) {
  try{
    const result = await knex('films')
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.get('/films/:title', async function(req, res, next) {
  try{
    const title = req.params.title
    const result = await knex('films')
      .where('title', title)
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.get('/films/description/:filter', async function(req, res, next) {
  try{
    const filter = req.params.filter
    const result = await knex('films')
      .where('description', 'like', `%${filter}%`)
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.get('/films_where_actor_is/:actor', async function(req, res, next) {
  try{
    const actor = req.params.actor
    const result = await knex.raw(`
      SELECT title from films
      JOIN actors_films
      on films.id = actors_films.film_id
      join actors
      on actors.id = actors_films.actor_id
      where actors.name = ?
    `, actor)
    res.json({ body: result.rows })
  } catch(err){
    next(err)
  }
});

module.exports = router
