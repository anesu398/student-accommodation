// controllers/propertyController.js

const Property = require('../models/Property');

// Create a new property
async function createProperty(req, res) {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: 'Property creation failed' });
  }
}

// Get all properties
async function getAllProperties(req, res) {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Get a single property by ID
async function getPropertyById(req, res) {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Update a property
async function updateProperty(req, res) {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: 'Property update failed' });
  }
}

// Delete a property
async function deleteProperty(req, res) {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Property deletion failed' });
  }
}

module.exports = { createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty };
