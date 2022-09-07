const { MongoClient } = require('mongodb')

const connectionURL = process.env.DB_CONNECTION
const dbName = process.env.DB_NAME

const init = async () => {
  const client = new MongoClient(connectionURL)
  console.log('Connected to database', dbName)
  return client.db(dbName)
}

module.exports = { init };
