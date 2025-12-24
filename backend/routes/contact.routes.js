const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// POST request to /send-email
router.post('/send-email', contactController.sendContactEmail);

module.exports = router;