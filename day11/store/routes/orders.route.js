const express = require("express");
const ordersController = require("../controllers/orders.controller");

const router = express.Router();

router.get("/", ordersController.getOrderDetails);
router.post("/", ordersController.setOrderDetails);
router.get("/find", ordersController.findOrderDetails);

module.exports = router;
