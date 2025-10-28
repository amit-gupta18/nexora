function addToCart(req, res) {
    res.send('This is the add to cart controller');
}

function getCart(req, res) {
    res.send('This is the get cart controller');
}

function removeFromCart(req, res) {
    res.send('This is the remove from cart controller');
}

module.exports = { addToCart, getCart, removeFromCart };