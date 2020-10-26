require('dotenv').config()

module.exports = {
  port: process.env.SERVER_PORT || 3000,
  cacheMemoryTime: process.env.CACHE_MEMORY_TIME || 15
}