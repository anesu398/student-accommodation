const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

router.post('/', reviewsController.addReview);
router.get('/:propertyId', reviewsController.getPropertyReviews);
// Add routes for update, delete, and other review operations

module.exports = router;
