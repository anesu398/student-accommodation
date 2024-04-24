// Update the controller functions to use the new payment gateway's API

// controllers/paymentController.js

const PaymentService = require('../services/paymentService');

async function processPayment(req, res) {
  try {
    // Call the payment service to process the payment using the new payment gateway's API
    const paymentResult = await PaymentService.processPayment(req.body);
    res.json(paymentResult);
  } catch (error) {
    res.status(500).json({ message: 'Payment processing failed' });
  }
}

module.exports = { processPayment };
