const express = require('express');
const cartRouter = express.Router();
const { addToCart, getCart, removeFromCart } = require('../controllers/cart.controller');
cartRouter.post('/', addToCart);
cartRouter.get('/', getCart);
cartRouter.delete('/:id', removeFromCart);

module.exports = cartRouter;