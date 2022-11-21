const express = require('express');
const userController = require("../controllers/users.controller")

const router = express.Router();

router.get("/",userController.getUserDetails);
router.post("/",userController.setUserDetails);
// router.get("/set",userController.setUserDetails);
router.get("/find",userController.findUserDetails);

module.exports = router;