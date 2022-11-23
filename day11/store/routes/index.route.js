const express = require('express');
const router = express.Router();
const userRoutes = require("./users.route")
const productRoutes = require("./products.route")
const orderRoutes = require("./orders.route")
const authRoutes = require("./auth.route")
const middlewares = require("../middlewares/auth.middleware")
// respond with "hello world" when a GET request is made to the homepage


router.get('/', (req, res) => {
    res.send('Holla, you are currently at users page-section !');
})

router.use("/auth",authRoutes);
router.use("/users",middlewares.authMiddleWare,userRoutes);
router.use("/products",middlewares.authMiddleWare,productRoutes);
router.use("/orders",middlewares.authMiddleWare,orderRoutes);

module.exports = router;
