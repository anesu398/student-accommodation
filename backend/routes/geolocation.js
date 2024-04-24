const express = require('express');
const router = express.Router();
const geolocationController = require('../controllers/geolocationController');

router.get('/location-details', geolocationController.getLocationDetails);

module.exports = router;
