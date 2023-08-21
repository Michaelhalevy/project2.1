// import products from '../data.json' assert {type: 'json'}
import jsonfile from 'jsonfile'


let data = []

jsonfile.readFile('./data.products.json', (err, arr) => {
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

const updateProduct = (id, title, price, description, category, image, rating, quantity) =>{
    console.log('')
    const productId = data.findIndex(product => product.id == id);
    data[productId] = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity
    }
    return data

}

const deleteProduct = (id) =>{
    const productId = data.findIndex(product => product.id == id);
    data.splice(productId, 1)
    return data

}

const updateQuantity = (id, quantity) =>{
    const productId = data.find(product => product.id == id);
    const {sold} = quantity
    const {add} = quantity

    if(sold){
        productId.quantity -= sold
    }else if(add){
        productId.quantity += add
    }

    return data
}


const productDal = {
    getProducts,
    getProductsById,
    addProducts,
    updateProduct,
    deleteProduct,
    updateQuantity
};



export default productDal;