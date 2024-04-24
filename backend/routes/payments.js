const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, paymentsController.processPayment);

module.exports = router;
