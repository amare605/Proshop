const express = require('express');
const products = require('./data/products')
const dotenv = require('dotenv')

dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send('Api is running...')
})

// 取得全部商品
app.get('/api/products', (req, res) => {
    res.json(products)
})

// 取得特定商品 by id
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'development';

app.listen(PORT, console.log(`server running in ${environment} on port ${PORT}`))