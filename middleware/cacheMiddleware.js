const config = require('../config')
const cache = require('memory-cache');
const { promisify } = require('util');
const redis = require('redis');

let client = redis.createClient();
client.on('error', (error) => {
  console.log('error Redis connect');
  client = false;
})
const getAsync = promisify(client.get).bind(client);
let memCache = new cache.Cache();

module.exports = () => {
  return async (req, res, next) => {
    let key =  '__express__' + req.originalUrl || req.url
    
    let cacheMempryContent = memCache.get(key);
    if (cacheMempryContent) {
      console.log('memory')
      res.send( cacheMempryContent );
      return
    }

    if (client) {
      let cacheRedisContent;
      await getAsync(key).then((result) => {
        if (result) {
          cacheRedisContent = result;
        }
      })

      if (cacheRedisContent) {
        console.log('redis')
        res.json(JSON.parse(cacheRedisContent));
        return
      }
    }
      
    res.sendResponse = res.json
    res.json = (body) => {
      console.log('request to db')
      memCache.put(key, body, config.cacheMemoryTime * 1000);
      if (client) {
        client.set(key, JSON.stringify(body), 'EX', config.cacheRedisTime);
      }
      res.sendResponse(body)
    }
    next()
    
  }
}
