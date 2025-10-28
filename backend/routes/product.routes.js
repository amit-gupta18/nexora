const express = require('express');
const productRouter = express.Router();
const { getProducts } = require('../controllers/product.controller');
productRouter.get('/', getProducts);

module.exports = productRouter;