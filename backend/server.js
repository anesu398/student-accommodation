const express = require('express');
const errorHandler = require('./middleware/errorHandler'); 
const authenticationService = require('./services/authenticationService'); // Import authentication service
const bookingsService = require('./services/bookingsService'); // Import bookings service
const reviewsService = require('./services/reviewsService'); // Import reviews service
// Import other services as needed

const app = express();

// Middleware and route configurations...

// Example route using authentication service
app.post('/login', async (req, res) => {
  try {
    // Call authentication service function
    const token = await authenticationService.login(req.body.username, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Example route using bookings service
app.post('/bookings', async (req, res) => {
  try {
    // Call bookings service function to create a new booking
    const booking = await bookingsService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Booking creation failed' });
  }
});

// Example route using reviews service
app.post('/reviews', async (req, res) => {
  try {
    // Call reviews service function to add a new review
    const review = await reviewsService.addReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: 'Review creation failed' });
  }
});

// Other routes using different services...

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
