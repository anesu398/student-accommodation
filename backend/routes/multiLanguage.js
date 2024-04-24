const express = require('express');
const router = express.Router();
const multiLanguageMiddleware = require('../middleware/multiLanguageMiddleware');

router.use(multiLanguageMiddleware);

module.exports = router;
