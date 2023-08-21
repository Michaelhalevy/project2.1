// import products from '../data.json' assert {type: 'json'}
import jsonfile from 'jsonfile'


let data = []

jsonfile.readFile('./data.json', (err, arr) => {
    if(err) console.log(err)
    data = arr
})

const getProducts = (req, res) => {
    return data
};

const getProductsById = (id) => {
const productId = data.find(productId => id === String(productId.id));
return productId;

};

const addProducts = (id, title, price, description, category, image, rating, quantity) => {
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
    data.push(product)
    return data
};


const productDal = {
    getProducts,
    getProductsById,
    addProducts
};

export default productDal;