const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');

router.post('/', bookingsController.createBooking);
router.get('/', bookingsController.getBookings);
// Add routes for update, delete, and other booking operations

module.exports = router;
