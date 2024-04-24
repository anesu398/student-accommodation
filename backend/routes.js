// routes.js
const { ObjectId } = require('mongodb');

async function routes(fastify, options) {
  const db = fastify.mongo.db;

  // Create a new property
  fastify.post('/properties', async (request, reply) => {
    try {
      const property = request.body;
      const result = await db.collection('properties').insertOne(property);
      reply.code(201).send(result.ops[0]);
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  });

  // Read all properties
  fastify.get('/properties', async (request, reply) => {
    try {
      const properties = await db.collection('properties').find().toArray();
      reply.send(properties);
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  });

  // Read a single property by ID
  fastify.get('/properties/:id', async (request, reply) => {
    try {
      const id = request.params.id;
      const property = await db.collection('properties').findOne({ _id: ObjectId(id) });
      if (!property) {
        reply.code(404).send({ error: 'Property not found' });
        return;
      }
      reply.send(property);
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  });

  // Update a property by ID
  fastify.put('/properties/:id', async (request, reply) => {
    try {
      const id = request.params.id;
      const updates = request.body;
      const result = await db.collection('properties').updateOne({ _id: ObjectId(id) }, { $set: updates });
      if (result.modifiedCount === 0) {
        reply.code(404).send({ error: 'Property not found' });
        return;
      }
      reply.send({ message: 'Property updated successfully' });
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  });

  // Delete a property by ID
  fastify.delete('/properties/:id', async (request, reply) => {
    try {
      const id = request.params.id;
      const result = await db.collection('properties').deleteOne({ _id: ObjectId(id) });
      if (result.deletedCount === 0) {
        reply.code(404).send({ error: 'Property not found' });
        return;
      }
      reply.send({ message: 'Property deleted successfully' });
    } catch (error) {
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  });
}

module.exports = routes;
