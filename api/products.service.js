import productsDal from './products.dal.js';

const getUsers = async () => {
    try {
        const users = await productsDal.getUsers();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getUserById = async (id) => {
    try {
        const user = await productsDal.getUserById(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addProducts = async (id, title, price, description, category, image, rating, quantity) => {
    try {
        const products = await productsDal.addProducts(id, title, price, description, category, image, rating, quantity);
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};



const productsService = {
    getUsers,
    getUserById,
    addProducts

};

export default productsService;