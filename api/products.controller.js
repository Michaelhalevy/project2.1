import productsService from './products.service.js';

const getAllUsers = async (req, res) => {
    try {
        console.log("getAllproducts")
        const users = await productsService.getUsers();
        if (users.length > 0)
            return res.status(200).send(users
                // "message": "Users fetch successfuly!",
                // "data": users
            )
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await productsService.getUserById(id);
        if (user) {
            return res.status(200).json(user)
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
const productsControler = {
    getAllUsers,
    getUserById,
    addProducts

};


export default productsControler;
