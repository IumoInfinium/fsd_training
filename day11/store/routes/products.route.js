const express = require('express');
const productController = require("../controllers/products.controller")

const router = express.Router();

router.get("/",productController.getProductDetails);
router.post("/",productController.setProductDetails);
// router.get("/set",productController.setproductDetails);
// router.get("/find",productController.findProductDetails);

module.exports = router;