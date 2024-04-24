const axios = require('axios');

async function getLocationDetails(req, res) {
  try {
    const { address } = req.query;

    // Use geocoding API to get location details from address
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`);

    // Extract relevant location data from the response
    const locationDetails = {
      latitude: response.data.results[0].geometry.location.lat,
      longitude: response.data.results[0].geometry.location.lng,
      formattedAddress: response.data.results[0].formatted_address
    };

    res.json(locationDetails);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { getLocationDetails };
