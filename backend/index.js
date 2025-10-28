const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
dotenv.config();

const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', orderRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

