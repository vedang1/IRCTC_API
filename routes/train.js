const express = require('express');
const { addTrain, getSeatAvailability } = require('../controllers/train.js');
const { authMiddleware } = require('../middleware/authmiddleware.js');
const router = express.Router();

router.post('/train', authMiddleware, addTrain);
router.get('/availability', authMiddleware, getSeatAvailability);

module.exports = router;
