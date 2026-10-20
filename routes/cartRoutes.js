const express = require("express");

const router = express.Router();

const {
    addToCart,
    getCart,
    removeCartItem
} = require("../controllers/cartController");

const authMiddleware = require("../middleware/authMiddleware");


// =====================================================
// ADD PRODUCT TO CART
// =====================================================

router.post(
    "/",
    authMiddleware,
    addToCart
);


// =====================================================
// GET LOGGED-IN USER'S CART
// =====================================================

router.get(
    "/",
    authMiddleware,
    getCart
);


// =====================================================
// REMOVE CART ITEM
// =====================================================

router.delete(
    "/:id",
    authMiddleware,
    removeCartItem
);


module.exports = router;