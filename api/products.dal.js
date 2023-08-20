import fs from 'fs';
import { promisify } from 'util';
import morgan from 'morgan';
import products from '../data.json' assert {type: 'json'}


const getUsers = async (req, res) => {
    const resp = await products
    return resp
};

const getUserById = async (id) => {
const resp = await products
const user = resp.find(user => id === String(user.id));
return user;

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


const userDal = {
    getUsers,
    getUserById,
    addProducts
};

export default userDal;