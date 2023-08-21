import fs from 'fs';
import { promisify } from 'util';
import morgan from 'morgan';
import products from '../data.json' assert {type: 'json'}


const getProducts = async (req, res) => {
    const resp = await products
    return resp
};

const getProductsById = async (id) => {
const resp = await products
const productId = resp.find(user => id === String(user.id));
return productId;

};

const addProducts = async (id, title, price, description, category, image, rating, quantity) => {
    const product = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity
    }
    const resp = await products
    resp.push(product)
    return resp
};


const productDal = {
    getProducts,
    getProductsById,
    addProducts
};

export default productDal;