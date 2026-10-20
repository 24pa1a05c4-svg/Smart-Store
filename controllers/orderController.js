const Order = require("../models/Order");
const Product = require("../models/Product");
const Cart = require("../models/Cart");


// =====================================================
// PLACE ORDER
// =====================================================

const placeOrder = async (req, res) => {

    try {

        // ==============================================
        // CHECK AUTHENTICATION
        // ==============================================

        if (
            !req.user ||
            !req.user.id
        ) {

            return res.status(401).json({

                success: false,

                message:
                    "User not authenticated."

            });

        }


        const userId =
            req.user.id;


        const {
            items,
            status
        } = req.body;


        // ==============================================
        // CHECK ITEMS
        // ==============================================

        if (
            !items ||
            !Array.isArray(items) ||
            items.length === 0
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Order items are required."

            });

        }


        // ==============================================
        // VALIDATE PRODUCTS
        // ==============================================

        let totalPrice = 0;


        const orderItems = [];


        for (
            const item of items
        ) {

            // ==========================================
            // PRODUCT ID CHECK
            // ==========================================

            if (
                !item.product
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Product ID is required."

                });

            }


            // ==========================================
            // QUANTITY
            // ==========================================

            const quantity =
                Number(
                    item.quantity
                );


            if (
                !Number.isInteger(
                    quantity
                ) ||
                quantity <= 0
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid product quantity."

                });

            }


            // ==========================================
            // FIND PRODUCT
            // ==========================================

            const product =
                await Product.findById(
                    item.product
                );


            if (!product) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Product not found."

                });

            }


            // ==========================================
            // STOCK CHECK
            // ==========================================

            if (
                Number(product.stock) <
                quantity
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        `${product.name} has insufficient stock.`

                });

            }


            // ==========================================
            // CALCULATE PRICE
            // ==========================================

            totalPrice +=
                Number(product.price) *
                quantity;


            // ==========================================
            // ORDER ITEM
            // ==========================================

            orderItems.push({

                product:
                    product._id,

                quantity:
                    quantity

            });

        }


        // ==============================================
        // DELIVERY CHARGE
        // ==============================================

        const deliveryCharge =
            40;


        totalPrice +=
            deliveryCharge;


        // ==============================================
        // CREATE ORDER
        // ==============================================

        const order =
            await Order.create({

                user:
                    userId,

                items:
                    orderItems,

                totalPrice:
                    totalPrice,

                status:
                    status ||
                    "Pending"

            });


        // ==============================================
        // REDUCE PRODUCT STOCK
        // ==============================================

        for (
            const item of orderItems
        ) {

            await Product.findByIdAndUpdate(

                item.product,

                {
                    $inc: {
                        stock:
                            -item.quantity
                    }
                }

            );

        }


        // ==============================================
        // CLEAR USER CART
        // ==============================================

        await Cart.deleteMany({

            user:
                userId

        });


        console.log(
            "🛒 Cart cleared after order."
        );


        // ==============================================
        // SUCCESS
        // ==============================================

        res.status(201).json({

            success: true,

            message:
                "Order Placed Successfully",

            order

        });

    }

    catch (err) {

        console.log(
            "PLACE ORDER ERROR:",
            err
        );


        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

};


// =====================================================
// GET ALL ORDERS
// =====================================================

const getOrders = async (
    req,
    res
) => {

    try {

        const orders =
            await Order.find()

                .populate(
                    "user",
                    "name email"
                )

                .populate(
                    "items.product",
                    "name price image"
                );


        res.status(200).json({

            success: true,

            orders

        });

    }

    catch (err) {

        console.log(
            "GET ORDERS ERROR:",
            err
        );


        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

};


// =====================================================
// GET SINGLE ORDER
// =====================================================

const getOrder = async (
    req,
    res
) => {

    try {

        const order =
            await Order.findById(
                req.params.id
            )

                .populate(
                    "user",
                    "name email"
                )

                .populate(
                    "items.product",
                    "name price image"
                );


        if (!order) {

            return res.status(404).json({

                success: false,

                message:
                    "Order Not Found"

            });

        }


        res.status(200).json({

            success: true,

            order

        });

    }

    catch (err) {

        console.log(
            "GET ORDER ERROR:",
            err
        );


        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

};


// =====================================================
// EXPORT
// =====================================================

module.exports = {

    placeOrder,

    getOrders,

    getOrder

};