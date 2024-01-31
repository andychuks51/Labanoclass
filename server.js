import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT;

import userRouter from "./routes/comment-routes.js";


app.use('/products', userRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});