const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { authenticate } = require('../middleware/auth');

router.get('/properties', authenticate, dashboardController.getPropertyList);
router.get('/bookings', authenticate, dashboardController.getBookingList);

module.exports = router;
