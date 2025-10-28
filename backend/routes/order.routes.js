const express = require('express');
const orderRouter = express.Router();
const { checkoutOrder } = require('../controllers/checkout.controller');
orderRouter.post('/', checkoutOrder);
module.exports = orderRouter;