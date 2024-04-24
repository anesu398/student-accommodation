// routes/property.js

const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const { authenticate } = require('../middleware/auth');

// Route to create a new property
router.post('/', authenticate, propertyController.createProperty);

// Route to get all properties
router.get('/', propertyController.getAllProperties);

// Route to get a single property by ID
router.get('/:id', propertyController.getPropertyById);

// Route to update a property
router.put('/:id', authenticate, propertyController.updateProperty);

// Route to delete a property
router.delete('/:id', authenticate, propertyController.deleteProperty);

module.exports = router;
