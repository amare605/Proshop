import express from 'express'
import dotenv from 'dotenv'
import color from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routers/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'development';

app.listen(PORT, console.log(`server running in ${environment} on port ${PORT}` .yellow.bold))