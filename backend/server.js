const express = require('express');
const products = require('./data/products')

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

app.listen(5000, console.log('server running on port 5000'))