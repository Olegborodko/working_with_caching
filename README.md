This is example optimization Node requests with server caching

##### Technology
- Node
- PostgreSql
- Memory-cache
- Redis

##### How to start
1. git clone
2. create .env in root folder  <br>
  `SERVER_PORT = 3000` <br>
  
  `DB_HOST = localhost` <br>
  `DB_USER = user` <br>
  `DB_PASSWORD = password` <br>
  `DB_NAME = database` <br>

  `NODE_ENV = development` <br>

  `CACHE_MEMORY_TIME = 15` <br>
  `CACHE_REDIS_TIME = 30` <br>
3. run `node index.js`

##### Routes for tests
http://localhost:3000/api/films
http://localhost:3000/api/films/:title
http://localhost:3000/api/films/description/:filter

You can change `CACHE_MEMORY_TIME` <br>
and `CACHE_REDIS_TIME` for increase or decrease <br> requests caching time