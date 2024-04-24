const Property = require('../models/Property');
const Booking = require('../models/Booking');

async function getPropertyList(req, res) {
  try {
    // Retrieve list of properties owned by the landlord
    const properties = await Property.find({ landlordId: req.user._id });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function getBookingList(req, res) {
  try {
    // Retrieve list of bookings for properties owned by the landlord
    const bookings = await Booking.find({ propertyId: { $in: req.user.properties } });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { getPropertyList, getBookingList };
