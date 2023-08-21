import express from 'express';
import productsControler from './products.controller.js'

const router = express.Router()

// כל המוצרים
router.get('/', productsControler.getAllProducts)

// מוצר ספציפי
router.get('/:id', productsControler.getProductsById)

// הוספת מוצר
router.post('/', productsControler.addProducts)

// עידכון מוצר
router.put('/:id', productsControler.updateProduct)

// מחיקת מוצר
router.delete('/:id', productsControler.deleteProduct)

// עידכון כמות המוצר
router.patch('/:id', productsControler.updateQuantity)


export default router;