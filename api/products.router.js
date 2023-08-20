import express from 'express';
import productsControler from './products.controller.js'

const router = express.Router()

// GET localhost:3000/api/users/
router.get('/', productsControler.getAllUsers)

// GET localhost:8020/api/users/8
router.get('/:id', productsControler.getUserById)

// POST localhost:3003/api/products/
router.post('/', productsControler.addProducts)



// PUT localhost:8020/api/users/
//router.put('/', productsControler.addUser)

// DELETE localhost:8020/api/users/
//router.delete('/', productsControler.addUser)

export default router;