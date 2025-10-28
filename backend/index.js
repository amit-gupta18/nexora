const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

