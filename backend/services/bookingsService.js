// services/bookingsService.js

const Booking = require('../models/Booking');

async function createBooking(bookingData) {
  const booking = await Booking.create(bookingData);
  return booking;
}

async function getBookings() {
  const bookings = await Booking.find();
  return bookings;
}

module.exports = { createBooking, getBookings };
