const express = require('express');
const router = express.Router();
const userRoutes = require("./users.route")

// respond with "hello world" when a GET request is made to the homepage

router.use("/user",userRoutes);

router.get('/', (req, res) => {
    res.send('Holla, you are currently at users page-section !');
})

module.exports = router;
