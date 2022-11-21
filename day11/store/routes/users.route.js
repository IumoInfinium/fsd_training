const express = require('express');
const userController = require("../controllers/users.controller")

const router = express.Router();

router.get("/",userController.getUserDetails);
router.get("/set",userController.setUserDetails);

module.exports = router;