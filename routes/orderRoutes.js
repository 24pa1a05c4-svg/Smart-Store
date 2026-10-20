const express = require("express");

const router = express.Router();


const {

    placeOrder,
    getOrders,
    getOrder

} = require("../controllers/orderController");


const authMiddleware =
    require("../middleware/authMiddleware");


// ================= PLACE ORDER =================

router.post(
    "/",
    authMiddleware,
    placeOrder
);


// ================= GET ALL ORDERS =================

router.get(
    "/",
    authMiddleware,
    getOrders
);


// ================= GET SINGLE ORDER =================

router.get(
    "/:id",
    authMiddleware,
    getOrder
);


module.exports = router;