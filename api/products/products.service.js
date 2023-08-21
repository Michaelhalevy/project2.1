import productsDal from './products.dal.js';

const getProducts = async () => {
    try {
        const products = await productsDal.getProducts();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getProductsById = async (id) => {
    try {
        const productId = await productsDal.getProductsById(id);
        return productId;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addProducts = async (id, title, price, description, category, image, rating, quantity) => {
    try {
        const products = await productsDal.addProducts(id, title, price, description, category, image, rating, quantity);
        console.log('service')
        
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const updateProduct = async (id, title, price, description, category, image, rating, quantity) => {
    try {
        const upProducts = await productsDal.updateProduct(id, title, price, description, category, image, rating, quantity);
        return upProducts;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};




const productsService = {
    getProducts,
    getProductsById,
    addProducts,
    updateProduct

};

export default productsService;