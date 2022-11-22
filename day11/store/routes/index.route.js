const express = require('express');
const router = express.Router();
const userRoutes = require("./users.route")
const productRoutes = require("./products.route")
const orderRoutes = require("./orders.route")
const authRoutes = require("./auth.route")

// respond with "hello world" when a GET request is made to the homepage


router.get('/', (req, res) => {
    res.send('Holla, you are currently at users page-section !');
})
router.use("/users",userRoutes);
router.use("/products",productRoutes);
router.use("/orders",orderRoutes);
router.use("/auth",authRoutes);

module.exports = router;
