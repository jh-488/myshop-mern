const Product = require("../models/Product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (e) {
        console.error(e);
        res.status(500).json({message : "Server error"});
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (e) {
        console.error(e);
        res.status(500).json({message : "Server error"});
    }
};

module.exports = {
    getProducts,
    getProductById
}