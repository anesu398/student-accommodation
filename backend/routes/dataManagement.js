const express = require('express');
const router = express.Router();
const dataManagementController = require('../controllers/dataManagementController');
const { authenticateAdmin } = require('../middleware/auth');
const multer = require('multer');

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

router.get('/export', authenticateAdmin, dataManagementController.exportPropertyData);
router.post('/import', authenticateAdmin, upload.single('csvFile'), dataManagementController.importPropertyData);

module.exports = router;
