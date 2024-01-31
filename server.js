import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT;

import userRouter from './routes/user-routes.js';
import productsRouter from './routes/products-routes.js';

app.use('/products', userRouter);
app.use('/users', productsRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});