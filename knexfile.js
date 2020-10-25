require('dotenv').config()

const knexConfig = {
  development: {
    client: 'pg',
    version: '12.4',
    connection: {
	    host : 'localhost',
	    user : 'usertest',
	    password : '111111',
	    database : 'dvdrental'
  	},
  	pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    }
  },

  production: {
    client: 'pg',
    version: '12.4',
    connection: {
	    host : process.env.DB_HOST,
	    user : process.env.DB_USER,
	    password : process.env.DB_PASSWORD,
	    database : process.env.DB_NAME
  	},
  	pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    }
  },

};

const environment = process.env.NODE_ENV
const configEnv = knexConfig[environment]

module.exports = knexConfig
module.exports.knex = require('knex')(configEnv)
