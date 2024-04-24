// Implement the necessary functions in the payment service to interact with the new payment gateway's API

// services/paymentService.js

const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function processPayment(paymentData) {
  try {
    // Make a request to the payment gateway's API to process the payment
    const response = await axios.post('payment_gateway_api_url', paymentData, {
      headers: {
        Authorization: `Bearer ${process.env.ZIM_PAYMENT_GATEWAY_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Payment processing failed');
  }
}

module.exports = { processPayment };
