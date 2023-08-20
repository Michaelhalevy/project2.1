import express from 'express';
import productsRouter from './api/products.router.js';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api', productsRouter)



app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});










