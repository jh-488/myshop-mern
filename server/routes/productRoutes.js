const express = require("express");
const router = express.Router();

const { getProducts, getProductById } = require("../controller/productControllers")

//desc : GET all products from db
//route : GET /api/products
//access : public
router.get("/", getProducts);

//desc : GET one product by id from db
//route : GET /api/products/:id
//access : public
router.get("/:id", getProductById);

module.exports = router;