// services/geolocationService.js

const axios = require('axios');

async function getLocationDetailsFromAddress(address) {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
    const locationDetails = {
      latitude: response.data.results[0].geometry.location.lat,
      longitude: response.data.results[0].geometry.location.lng,
      formattedAddress: response.data.results[0].formatted_address
    };
    return locationDetails;
  } catch (error) {
    throw new Error('Error fetching location details');
  }
}

module.exports = { getLocationDetailsFromAddress };
