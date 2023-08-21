import productsService from './products.service.js';

const getAllProducts = async (req, res) => {
    try {
        console.log("getAllproducts")
        const allProduct = await productsService.getProducts();
        if (allProduct.length > 0)
            return res.status(200).send(allProduct
            )
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};

const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const productID = await productsService.getProductsById(id);
        if (productID) {
            return res.status(200).json(productID)
        } else {
            return res.status(404).json({ "message": "user not found" })

        }
    } catch (error) {
        console.error(error)
    }
};
const addProducts = async (req, res) => {
    try {
        const {id, title, price, description, category, image, rating, quantity} = req.body
        const product = await productsService.addProducts(id, title, price, description, category, image, rating, quantity);
        if (product) {
            return res.status(200).json(product)
        } else {
            return res.status(404).json({ "message": "user not found" })

        }
    } catch (error) {
        console.error(error)
    }}

    const updateProduct = async (req, res) => {
        try {
            const {title, price, description, category, image, rating, quantity} = req.body
            const {id} = req.params
            console.log('controller')
            const product = await productsService.updateProduct(id, title, price, description, category, image, rating, quantity);
            if (product) {
                return res.status(200).json(product)
            } else {
                return res.status(404).json({ "message": "user not found" })
    
            }
        } catch (error) {
            console.error(error)
}};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productID = await productsService.deleteProduct(id);
        if (productID) {
            return res.status(200).json(productID)
        } else {
            return res.status(404).json({ "message": "user not found" })

        }
    } catch (error) {
        console.error(error)
    }
};


        
const productsControler = {
    getAllProducts,
    getProductsById,
    addProducts,
    updateProduct,
    deleteProduct

};


export default productsControler;
