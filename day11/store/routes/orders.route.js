const express = require("express");
const ordersController = require("../controllers/orders.controller");

const router = express.Router();

router.get("/", ordersController.orderGetDetails);
router.post("/", ordersController.orderSetDetails);


module.exports = router;
