const express = require('express')
const router = express.Router()
const { knex } = require('../knexfile')

router.get('/test', async function(req, res, next) {
  try{
    res.json({ body: 'test' })
  } catch(err){
    next(err)
  }
});

module.exports = router
