const Cart = require("../models/Cart");

// ==========================================
// ADD ITEM TO CART
// ==========================================

const addToCart = async (req, res) => {

    try {

        // User must come from JWT middleware
        const userId = req.user.id;

        const {
            product,
            quantity
        } = req.body;


        // ==========================================
        // CHECK PRODUCT
        // ==========================================

        if (!product) {

            return res.status(400).json({

                success: false,

                message: "Product ID is required."

            });

        }


        // ==========================================
        // CHECK QUANTITY
        // ==========================================

        const finalQuantity =
            Number(quantity) > 0
                ? Number(quantity)
                : 1;


        // ==========================================
        // CHECK IF PRODUCT ALREADY IN CART
        // ==========================================

        const existingCart =
            await Cart.findOne({

                user: userId,

                product: product

            });


        if (existingCart) {

            existingCart.quantity +=
                finalQuantity;

            await existingCart.save();


            return res.status(200).json({

                success: true,

                message:
                    "Cart quantity updated.",

                cart: existingCart

            });

        }


        // ==========================================
        // CREATE NEW CART ITEM
        // ==========================================

        const cart =
            await Cart.create({

                user: userId,

                product: product,

                quantity: finalQuantity

            });


        res.status(201).json({

            success: true,

            message:
                "Product Added To Cart",

            cart

        });

    }

    catch (err) {

        console.log(
            "ADD TO CART ERROR:",
            err
        );


        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

};


// ==========================================
// GET LOGGED-IN USER CART
// ==========================================

const getCart = async (req, res) => {

    try {

        const userId =
            req.user.id;


        const cart =
            await Cart.find({

                user: userId

            })
            .populate(
                "product",
                "name price image"
            );


        res.status(200).json({

            success: true,

            cart

        });

    }

    catch (err) {

        console.log(
            "GET CART ERROR:",
            err
        );


        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

};


// ==========================================
// REMOVE CART ITEM
// ==========================================

const removeCartItem = async (req, res) => {

    try {

        const userId =
            req.user.id;


        const cartItem =
            await Cart.findOne({

                _id: req.params.id,

                user: userId

            });


        if (!cartItem) {

            return res.status(404).json({

                success: false,

                message:
                    "Cart item not found."

            });

        }


        await Cart.findByIdAndDelete(
            req.params.id
        );


        res.status(200).json({

            success: true,

            message:
                "Item Removed From Cart"

        });

    }

    catch (err) {

        console.log(
            "REMOVE CART ERROR:",
            err
        );


        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

};


module.exports = {

    addToCart,

    getCart,

    removeCartItem

};