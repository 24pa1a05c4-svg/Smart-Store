const express = require("express");

const {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
} = require("../controllers/productController");

const router = express.Router();


// ==========================================
// GET ALL PRODUCTS
// GET /api/products
// ==========================================

router.get("/", getProducts);


// ==========================================
// GET SINGLE PRODUCT
// GET /api/products/:id
// ==========================================

router.get("/:id", getProductById);


// ==========================================
// CREATE PRODUCT
// POST /api/products
// ==========================================

router.post("/", createProduct);


// ==========================================
// DELETE PRODUCT
// DELETE /api/products/:id
// ==========================================

router.delete("/:id", deleteProduct);


module.exports = router;