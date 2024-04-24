// db.js
const fastifyPlugin = require('fastify-plugin');
const { MongoClient } = require('mongodb');

async function dbConnector(fastify, options) {
  const url = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
  const dbName = 'student_accommodation'; // Update with your database name
  
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    fastify.decorate('mongo', db);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}

module.exports = fastifyPlugin(dbConnector);
