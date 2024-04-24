const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, maintenanceController.submitMaintenanceRequest);
router.get('/:propertyId', authenticate, maintenanceController.getMaintenanceRequests);

module.exports = router;
