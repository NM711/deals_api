const { MongoClient } = require('mongodb')
require('dotenv').config()
let db
const client = new MongoClient(process.env.MONGODB_URI)
module.exports.runDatabase = async (dbName = 'computer_deals') => {
  try {
    db = client.db(dbName)
    console.log('DB Running...')
  } catch (err) {
    client.close()
    console.log('runDatabase ERR!', err)
  }
}

module.exports.db = () => db
module.exports.client = client
