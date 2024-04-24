const Review = require('../models/Review');

async function addReview(req, res) {
  try {
    // Create new review
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: 'Review creation failed' });
  }
}

async function getPropertyReviews(req, res) {
  try {
    // Retrieve reviews for a property
    const propertyId = req.params.propertyId;
    const reviews = await Review.find({ propertyId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Implement updateReview, deleteReview, and other review-related functions

module.exports = { addReview, getPropertyReviews };
