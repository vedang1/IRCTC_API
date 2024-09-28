const express = require('express');
const { bookSeat } = require('../controllers/booking.js');
const { authMiddleware } = require('../middleware/authmiddleware.js');
const router = express.Router();

router.post('/book', authMiddleware, bookSeat);

module.exports = router;
