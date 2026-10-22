require("dotenv").config();

const express = require("express");
const path = require("path");

console.log(
    "JWT_SECRET diagnostic:",
    JSON.stringify({
        exists: Object.prototype.hasOwnProperty.call(
            process.env,
            "JWT_SECRET"
        ),
        nonEmpty: Boolean(process.env.JWT_SECRET?.trim()),
        length: process.env.JWT_SECRET?.length ?? 0
    })
);

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Serve frontend
const clientPath = path.join(__dirname, "client");
app.use(express.static(clientPath));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
});

// 404 route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(
    "JWT_SECRET configured:",
    Boolean(process.env.JWT_SECRET)
);

console.log(
    "JWT_SECRET length:",
    process.env.JWT_SECRET?.length ?? 0
);

console.log(
    "NODE_ENV:",
    process.env.NODE_ENV
);
});
