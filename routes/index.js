const express = require('express');
const payment = require('./payment');

const router = express.Router();

router.use('/payment', payment);

module.exports = router;
