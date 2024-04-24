const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { authenticateAdmin } = require('../middleware/auth');

router.get('/user-engagement', authenticateAdmin, analyticsController.getUserEngagement);

module.exports = router;
