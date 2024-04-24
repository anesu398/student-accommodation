// services/dashboardService.js

const Property = require('../models/Property');
const Booking = require('../models/Booking');

async function getPropertyListForLandlord(landlordId) {
  const properties = await Property.find({ landlordId });
  return properties;
}

async function getBookingListForLandlord(landlordId) {
  const bookings = await Booking.find({ landlordId });
  return bookings;
}

module.exports = { getPropertyListForLandlord, getBookingListForLandlord };
