import express from 'express';
import productsRouter from './api/products/products.router.js';
import UsersRouter from './api/users/users.router.js';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api/products', productsRouter)
app.use('/api/users', UsersRouter)


app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});










