import express from 'express';
import productsControler from './products.controller.js'

const router = express.Router()

router.get('/', productsControler.getAllProducts)


router.get('/:id', productsControler.getProductsById)


router.post('/', productsControler.addProducts)


router.put('/:id', productsControler.updateProduct)


//router.delete('/', productsControler.addUser)

export default router;