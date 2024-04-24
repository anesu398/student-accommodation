// services/reviewsService.js

const Review = require('../models/Review');

async function addReview(reviewData) {
  const review = await Review.create(reviewData);
  return review;
}

async function getReviews(propertyId) {
  const reviews = await Review.find({ propertyId });
  return reviews;
}

module.exports = { addReview, getReviews };
